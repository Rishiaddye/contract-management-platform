export const INITIAL_BLUEPRINTS = [
  {
    id: 'bp1',
    name: 'Internship Agreement',
    description: 'Agreement defining internship terms, duration, and responsibilities',
    fields: [
      { id: 'f1', type: 'Text', label: 'Intern Name', position: { x: 10, y: 20 } },
      { id: 'f2', type: 'Text', label: 'College Name', position: { x: 10, y: 80 } },
      { id: 'f3', type: 'Date', label: 'Start Date', position: { x: 10, y: 140 } },
      { id: 'f4', type: 'Date', label: 'End Date', position: { x: 10, y: 200 } },
      { id: 'f5', type: 'Signature', label: 'Intern Signature', position: { x: 10, y: 260 } },
    ]
  },
  {
    id: 'bp2',
    name: 'Leave Agreement',
    description: 'Employee leave application and approval agreement',
    fields: [
      { id: 'f6', type: 'Text', label: 'Employee Name', position: { x: 10, y: 20 } },
      { id: 'f7', type: 'Date', label: 'Leave Start Date', position: { x: 10, y: 80 } },
      { id: 'f8', type: 'Date', label: 'Leave End Date', position: { x: 10, y: 140 } },
      { id: 'f9', type: 'Text', label: 'Reason for Leave', position: { x: 10, y: 200 } },
      { id: 'f10', type: 'Signature', label: 'Manager Approval', position: { x: 10, y: 260 } },
    ]
  },
  {
    id: 'bp3',
    name: 'Employment Contract',
    description: 'Employee Hiring Agreement with confidentiality terms',
    fields: [
      { id: 'f10', type: 'Text', label: 'Employee Name', position: { x: 10, y: 20 } },
      { id: 'f11', type: 'Date', label: 'Start Date', position: { x: 10, y: 80 } },
      { id: 'f12', type: 'Text', label: 'Position', position: { x: 10, y: 140 } },
      { id: 'f13', type: 'Checkbox', label: 'Confidentiality Terms', position: { x: 10, y: 200 } },
      { id: 'f14', type: 'Signature', label: 'Employee Signature', position: { x: 10, y: 260 } },
    ]
  }
];

export const INITIAL_CONTRACTS = [
  { id: 'c1', name: 'Arjun Srivastav - Internship', blueprintId: 'bp1', status: 'Signed', createdDate: '2024-01-10', values: { f1: 'Acme Corporation', f2: '2024-01-10', f3: 'John Smith' } },
  { id: 'c2', name: 'Amit kumar - Leave Agreement', blueprintId: 'bp2', status: 'Created', createdDate: '2024-01-15', values: {} },
  { id: 'c3', name: 'Aman Sharma - Internship', blueprintId: 'bp1', status: 'Sent', createdDate: '2024-01-12', values: { f1: 'Global Partners Inc' } },
  { id: 'c4', name: 'Swarna Sachdev - Employment Contract', blueprintId: 'bp3', status: 'Approved', createdDate: '2024-01-14', values: { f10: 'John Smith', f12: 'Senior Developer' } },
];