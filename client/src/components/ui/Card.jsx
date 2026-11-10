
import "./Card.css";

function Card({
  title,
  value,
  description,
  children,
}) {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>

      {value !== undefined && (
        <h2 className="card-value">{value}</h2>
      )}

      {description && (
        <p className="card-description">{description}</p>
      )}

      {children}
    </div>
  );
}

export default Card;
