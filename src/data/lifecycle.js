export const CONTRACT_STATUS_FLOW = {
  Created: ['Approved', 'Revoked'],
  Approved: ['Sent', 'Revoked'],
  Sent: ['Signed', 'Revoked'],
  Signed: ['Locked'],
  Locked: [],
  Revoked: []
};

export const FIELD_TYPES = ['Text', 'Date', 'Signature', 'Checkbox'];
export const CONTRACT_STATUSES = ['Created', 'Approved', 'Sent', 'Signed', 'Locked'];

export const STATUS_COLORS = {
  Created: '#6b7280',
  Approved: '#2563eb',
  Sent: '#9333ea',
  Signed: '#16a34a',
  Locked: '#dc2626',
  Revoked: '#4b5563'
};