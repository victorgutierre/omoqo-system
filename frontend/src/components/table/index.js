import { Link } from "react-router-dom";

function Table({ data }) {
  console.log(data);
  return (
    <div className="custom-table">
      <table>
        <tbody>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Width</th>
            <th>Length</th>
          </tr>
          
          {data.map(x => (
            <tr>
              <td data-th="Code">
                <Link to={`/edit/${x.code}`}>{x.code}</Link>
              </td>
              <td data-th="Name">
                {x.name}
              </td>
              <td data-th="Width">
                {x.width}
              </td>
              <td data-th="Length">
                {x.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default Table;