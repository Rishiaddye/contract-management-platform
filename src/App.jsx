import { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import BlueprintModal from './components/BlueprintModal';
import ContractDetailModal from './components/ContractDetailModal';
import ContractsPage from './pages/ContractsPage';
import BlueprintsPage from './pages/BlueprintsPage';
import Modal from './components/Modal';
import { useContractStorage } from './utils/storage';
import './styles/global.css';



const ContractCreationModal = ({ isOpen, onClose, blueprints, onSave }) => {
  const [contractName, setContractName] = useState('');
  const [selectedBlueprintId, setSelectedBlueprintId] = useState('');
  const [fieldValues, setFieldValues] = useState({});

  const selectedBlueprint = blueprints.find(b => b.id === selectedBlueprintId);

  const handleSave = () => {
    if (!contractName.trim()) return alert('Enter contract name');
    if (!selectedBlueprintId) return alert('Select blueprint');

    onSave({
      id: `c${Date.now()}`,
      name: contractName,
      blueprintId: selectedBlueprintId,
      status: 'Created',
      createdDate: new Date().toISOString().split('T')[0],
      values: fieldValues
    });

    setContractName('');
    setSelectedBlueprintId('');
    setFieldValues({});
    onClose();
  };

  return (
    <Modal isOpen={isOpen} title="Create Contract" onClose={onClose}>
      <div className="form-group">
        <label>Contract Name *</label>
        <input
          className="form-input"
          value={contractName}
          onChange={e => setContractName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Select Blueprint *</label>
        <select
          className="form-input"
          value={selectedBlueprintId}
          onChange={e => {
            setSelectedBlueprintId(e.target.value);
            setFieldValues({});
          }}
        >
          <option value="">-- Select --</option>
          {blueprints.map(b => (
            <option key={b.id} value={b.id}>{b.name}</option>
          ))}
        </select>
      </div>

      {selectedBlueprint && selectedBlueprint.fields.map(f => (
        <div key={f.id} className="form-group">
          <label>{f.label}</label>

          {f.type === 'Checkbox' ? (
            <input
              type="checkbox"
              checked={fieldValues[f.id] || false}
              onChange={e =>
                setFieldValues(v => ({ ...v, [f.id]: e.target.checked }))
              }
            />
          ) : (
            <input
              type={f.type === 'Date' ? 'date' : 'text'}
              className="form-input"
              value={fieldValues[f.id] || ''}
              onChange={e =>
                setFieldValues(v => ({ ...v, [f.id]: e.target.value }))
              }
            />
          )}
        </div>
      ))}

      <div className="modal-footer">
        <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
        <button className="btn btn-primary" onClick={handleSave}>Create</button>
      </div>
    </Modal>
  );
};



export default function App() {
  const storage = useContractStorage();

 const [activeTab, setActiveTab] = useState('contracts'); 
  const [showBlueprintModal, setShowBlueprintModal] = useState(false);
  const [showContractModal, setShowContractModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All');

  const getBlueprint = id =>
    storage.blueprints.find(b => b.id === id);

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          contractCount={storage.contracts.length}
          blueprintCount={storage.blueprints.length}
        />
        
        {activeTab === 'dashboard' && (
  <div className="page-container">
    <h2 className="page-title">Dashboard</h2>
    <p className="page-subtitle">Overview of contract activity</p>

    <div className="stats-grid">
      <div className="stat-card">
        <p className="stat-label">Total Contracts</p>
        <p className="stat-value">{storage.contracts.length}</p>
      </div>

      <div className="stat-card">
        <p className="stat-label">Active</p>
        <p className="stat-value">
          {storage.contracts.filter(c =>
            ['Created', 'Approved', 'Sent'].includes(c.status)
          ).length}
        </p>
      </div>

      <div className="stat-card">
        <p className="stat-label">Signed</p>
        <p className="stat-value">
          {storage.contracts.filter(c => c.status === 'Signed').length}
        </p>
      </div>

      <div className="stat-card">
        <p className="stat-label">Locked</p>
        <p className="stat-value">
          {storage.contracts.filter(c => c.status === 'Locked').length}
        </p>
      </div>
    </div>
  </div>
)}

        {activeTab === 'contracts' && (
          <ContractsPage
            storage={storage}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            onNewContract={() => setShowContractModal(true)}
            onViewContract={setSelectedContract}
          />
        )}

      {activeTab === 'blueprints' && (
  <BlueprintsPage
    storage={storage}
    onNewContract={() => setShowContractModal(true)}
    onNewBlueprint={() => setShowBlueprintModal(true)}  
  />
)}

      </main>

      <BlueprintModal
        isOpen={showBlueprintModal}
        onClose={() => setShowBlueprintModal(false)}
        onSave={storage.addBlueprint}
      />

      <ContractCreationModal
        isOpen={showContractModal}
        onClose={() => setShowContractModal(false)}
        blueprints={storage.blueprints}
        onSave={storage.addContract}
      />

      {selectedContract && (
        <ContractDetailModal
          isOpen={true}
          contract={selectedContract}
          blueprint={getBlueprint(selectedContract.blueprintId)}
          onClose={() => setSelectedContract(null)}
          onStatusChange={storage.updateContractStatus}
          onDelete={storage.deleteContract}
        />
      )}
    </div>
  );
}
