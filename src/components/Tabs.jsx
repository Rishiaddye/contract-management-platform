import '../styles/global.css';

export default function Tabs({
  activeTab,
  setActiveTab,
  contractCount,
  blueprintCount
}) {
  return (
    <div className="tabs-container">
      <button
        onClick={() => setActiveTab('dashboard')}
        className={`tab-button ${activeTab === 'dashboard' ? 'tab-active' : 'tab-inactive'}`}
      >
        📊 Dashboard
      </button>

      <button
        onClick={() => setActiveTab('contracts')}
        className={`tab-button ${activeTab === 'contracts' ? 'tab-active' : 'tab-inactive'}`}
      >
        📄 Contracts ({contractCount})
      </button>

      <button
        onClick={() => setActiveTab('blueprints')}
        className={`tab-button ${activeTab === 'blueprints' ? 'tab-active' : 'tab-inactive'}`}
      >
        📋 Blueprints ({blueprintCount})
      </button>
    </div>
  );
}
