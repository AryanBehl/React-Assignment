function TableItem({ employee, index, handleDelete }) {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>{employee.address}</td>
      <td>{employee.department}</td>
      <td>{employee.salary}</td>
      <td>{employee.married ? "Yes" : "No"}</td>
      <td>{employee.profilePhoto ? employee.profilePhoto.name : "No File"}</td>
      <td>
        <button className="delete-btn" onClick={() => handleDelete(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TableItem;
