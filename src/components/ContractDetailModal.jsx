import Modal from './Modal';
import StatusBadge from './StatusBadge';
import { CONTRACT_STATUS_FLOW } from '../data/lifecycle';
import '../styles/modal.css';

export default function ContractDetailModal({ isOpen, onClose, contract, blueprint, onStatusChange, onDelete }) {
  if (!contract || !blueprint) return null;

  const availableActions = CONTRACT_STATUS_FLOW[contract.status] || [];
  const isLocked = contract.status === 'Locked';
  const isRevoked = contract.status === 'Revoked';

  return (
    <Modal isOpen={isOpen} title={contract.name} onClose={onClose}>
      <div className="detail-section">
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Status</span>
            <StatusBadge status={contract.status} />
          </div>
          <div className="info-item">
            <span className="info-label">Blueprint</span>
            <span className="info-value">{blueprint.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Created Date</span>
            <span className="info-value">{contract.createdDate}</span>
          </div>
          <div className="info-item">
            <span className="info-label">ID</span>
            <span className="info-value">{contract.id}</span>
          </div>
        </div>
      </div>

      <div className="detail-section">
        <h3>Contract Fields ({blueprint.fields.length})</h3>
        <div className="fields-grid">
          {blueprint.fields.map(field => (
            <div key={field.id} className="field-card">
              <p className="field-label">{field.label}</p>
              <p className="field-type">{field.type}</p>
              <p className="field-value">
                {field.type === 'Signature' ? '[Signature]' : 
                 field.type === 'Checkbox' ? (contract.values[field.id] ? '✅ Yes' : '❌ No') :
                 contract.values[field.id] || 'Not filled'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {!isRevoked && availableActions.length > 0 && (
        <div className="action-section">
          <h3>Available Actions</h3>
          <div className="actions-container">
            {availableActions.map(action => (
              <button
                key={action}
                onClick={() => {
                  if (confirm(`Mark as ${action}?`)) {
                    onStatusChange(contract.id, action);
                    onClose();
                  }
                }}
                className={`btn ${action === 'Revoked' ? 'btn-danger' : 'btn-success'}`}
              >
                {action === 'Revoked' ? 'Revoke' : `Mark as ${action}`}
              </button>
            ))}
          </div>
        </div>
      )}

      {isRevoked && (
        <div className="alert alert-danger">
          This contract has been revoked and cannot proceed further
        </div>
      )}

      {isLocked && (
        <div className="alert alert-warning">
          This contract is locked and cannot be edited
        </div>
      )}

      <div className="modal-footer">
        <button onClick={onClose} className="btn btn-secondary">Close</button>
        <button onClick={() => {
          if (confirm('Delete this contract?')) {
            onDelete(contract.id);
            onClose();
          }
        }} className="btn btn-danger">Delete</button>
      </div>
    </Modal>
  );
}