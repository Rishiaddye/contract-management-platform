import { Plus, Trash2, ChevronRight } from 'lucide-react';
import '../styles/global.css';

export default function BlueprintsPage({ storage, onNewContract, onNewBlueprint }) {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2 className="page-title">Contract Blueprints</h2>
          <p className="page-subtitle">Reusable contract templates</p>
        </div>

        {/*  FIXED BUTTON */}
        <button onClick={onNewBlueprint} className="btn btn-primary">
          <Plus size={20} /> New Blueprint
        </button>
      </div>

      <div className="blueprint-grid">
        {storage.blueprints.map(blueprint => {
          const contractCount = storage.contracts.filter(
            c => c.blueprintId === blueprint.id
          ).length;

          return (
            <div key={blueprint.id} className="blueprint-card">
              <div className="blueprint-header">
                <div>
                  <h3 className="blueprint-title">{blueprint.name}</h3>
                  <p className="blueprint-desc">{blueprint.description}</p>
                </div>

                <button
                  onClick={() => {
                    if (confirm('Delete this blueprint?')) {
                      storage.deleteBlueprint(blueprint.id);
                    }
                  }}
                  className="btn-icon btn-danger"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="blueprint-fields">
                <p className="fields-label">Fields ({blueprint.fields.length})</p>
                <ul className="fields-list">
                  {blueprint.fields.map(field => (
                    <li key={field.id}>
                      {field.label}{' '}
                      <span className="field-type">({field.type})</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="blueprint-usage">
                <strong>{contractCount}</strong> contract
                {contractCount !== 1 ? 's' : ''} using this
              </p>

              <button
                onClick={onNewContract}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <ChevronRight size={16} /> Use This Blueprint
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
