import { Link } from "react-router-dom";

function Card({ data, clickFn }) {
  const { name, width, length, code } = data;

  return (
    <div className="card">
      <div className="card__body">
        <p className="card__title">{name}</p>
        <ul className="card__list">
          <li><b>Length:</b> {length} Meters</li>
          <li><b>Width:</b> {width} Meters</li>
          <li><b>Code:</b> {code}</li>
        </ul>
      </div>

      <div className="card__footer">
        <Link to={`edit/${code}`} className="edit">Edit</Link>
        <p onClick={() => clickFn(code)} className="delete">Delete</p>
      </div>
    </div>
  );
}

export default Card;