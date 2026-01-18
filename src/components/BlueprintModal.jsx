import { useState } from 'react';
import Modal from './Modal';
import { FIELD_TYPES } from '../data/lifecycle';
import '../styles/modal.css';

export default function BlueprintModal({ isOpen, onClose, onSave }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [fields, setFields] = useState([]);
  const [fieldType, setFieldType] = useState('Text');
  const [fieldLabel, setFieldLabel] = useState('');

  const addField = () => {
    if (!fieldLabel.trim()) {
      alert('Please enter field label');
      return;
    }
    const newField = {
      id: `f${Date.now()}`,
      type: fieldType,
      label: fieldLabel,
      position: { x: 10, y: 20 + fields.length * 60 }
    };
    setFields([...fields, newField]);
    setFieldLabel('');
  };

  const removeField = (id) => {
    setFields(fields.filter(f => f.id !== id));
  };

  const handleSave = () => {
    if (!name.trim()) {
      alert('Please enter blueprint name');
      return;
    }
    if (fields.length === 0) {
      alert('Please add at least one field');
      return;
    }
    
    const newBlueprint = {
      id: `bp${Date.now()}`,
      name,
      description,
      fields
    };
    
    onSave(newBlueprint);
    setName('');
    setDescription('');
    setFields([]);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} title="Create New Blueprint" onClose={onClose}>
      <div className="form-group">
        <label>Blueprint Name *</label>
        <input
          type="text"
          placeholder="e.g., Partnership Agreement"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Describe what this blueprint is used for"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input form-textarea"
        />
      </div>

      <div className="form-section">
        <h3>Add Contract Fields</h3>
        
        <div className="form-group">
          <label>Field Type *</label>
          <select
            value={fieldType}
            onChange={(e) => setFieldType(e.target.value)}
            className="form-input"
          >
            {FIELD_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label>Field Label *</label>
          <input
            type="text"
            placeholder="e.g., Company Name"
            value={fieldLabel}
            onChange={(e) => setFieldLabel(e.target.value)}
            className="form-input"
          />
        </div>

        <button onClick={addField} className="btn btn-primary" style={{width: '100%'}}>
          + Add Field
        </button>
      </div>

      {fields.length > 0 && (
        <div className="fields-list">
          <h4>Fields Added ({fields.length})</h4>
          {fields.map((f, idx) => (
            <div key={f.id} className="field-item">
              <span>{idx + 1}. {f.label} ({f.type})</span>
              <button onClick={() => removeField(f.id)} className="btn-delete">Delete</button>
            </div>
          ))}
        </div>
      )}

      <div className="modal-footer">
        <button onClick={onClose} className="btn btn-secondary">Cancel</button>
        <button onClick={handleSave} className="btn btn-primary">Create Blueprint</button>
      </div>
    </Modal>
  );
}