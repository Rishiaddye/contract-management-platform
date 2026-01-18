import { Plus, Eye, Trash2 } from 'lucide-react';
import '../styles/table.css';
import StatusBadge from '../components/StatusBadge';

export default function ContractsPage({ 
  storage, 
  onNewContract, 
  onViewContract, 
  statusFilter, 
  setStatusFilter 
}) {
  const getBlueprint = (blueprintId) =>
    storage.blueprints.find(b => b.id === blueprintId);

  const filteredContracts =
    statusFilter === 'All'
      ? storage.contracts
      : storage.contracts.filter(c => {
          if (statusFilter === 'Active')
            return ['Created', 'Approved', 'Sent'].includes(c.status);
          if (statusFilter === 'Pending')
            return ['Created', 'Approved'].includes(c.status);
          if (statusFilter === 'Signed')
            return ['Signed', 'Locked'].includes(c.status);
          return true;
        });

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2 className="page-title">Contracts</h2>
          <p className="page-subtitle">Manage and track contract lifecycle</p>
        </div>
        <button onClick={onNewContract} className="btn btn-primary">
          <Plus size={20} /> New Contract
        </button>
      </div>

      <div className="filter-container">
        {['All', 'Active', 'Pending', 'Signed'].map(status => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`filter-btn ${
              statusFilter === status ? 'filter-active' : 'filter-inactive'
            }`}
          >
            {status} (
            {storage.contracts.filter(c => {
              if (status === 'All') return true;
              if (status === 'Active')
                return ['Created', 'Approved', 'Sent'].includes(c.status);
              if (status === 'Pending')
                return ['Created', 'Approved'].includes(c.status);
              if (status === 'Signed')
                return ['Signed', 'Locked'].includes(c.status);
              return false;
            }).length}
            )
          </button>
        ))}
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Contract Name</th>
              <th>Blueprint</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredContracts.length > 0 ? (
              filteredContracts.map(contract => {
                const blueprint = getBlueprint(contract.blueprintId);
                return (
                  <tr key={contract.id}>
                    <td>{contract.name}</td>
                    <td>{blueprint?.name || 'Unknown'}</td>

                    {/* GLASS STATUS BADGE */}
                    <td>
                      <StatusBadge status={contract.status} />
                    </td>

                    <td>{contract.createdDate}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          onClick={() => onViewContract(contract)}
                          className="btn-icon btn-info"
                          title="View"
                        >
                          <Eye size={16} />
                        </button>

                        <button
                          onClick={() => {
                            if (confirm('Delete this contract?')) {
                              storage.deleteContract(contract.id);
                            }
                          }}
                          className="btn-icon btn-danger"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="empty-state">
                  <p>No contracts found</p>
                  <p className="empty-state-sub">
                    Create a new contract to get started
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
