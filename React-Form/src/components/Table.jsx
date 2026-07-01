import TableItem from "./TableItem";

function Table({ employees, handleDelete }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Married</th>
            <th>Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <TableItem
              key={index}
              employee={emp}
              index={index}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
