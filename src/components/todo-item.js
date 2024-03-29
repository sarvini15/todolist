export default function TodoItem(props) {
  const { name, id, onDelete } = props;
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button className="btn btn-sm btn-success">
            <i className="bi bi-check-square"></i>
          </button>
          <span className="ms-2 text-decoration-line-through">{name}</span>
        </div>
        <div>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-sm btn-danger"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </ul>
  );
}
