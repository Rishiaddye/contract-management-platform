import '../styles/global.css';
import { STATUS_COLORS } from '../data/lifecycle';

export default function StatusBadge({ status }) {
  const color = STATUS_COLORS[status] || '#6b7280';

  return (
    <span
      className="status-badge glass-badge"
      style={{
        color: color,
        borderColor: color,
        backgroundColor: `${color}22`   
      }}
    >
      {status}
    </span>
  );
}
