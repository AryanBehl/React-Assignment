import Table from "./components/Table";
import { useState } from "react";
import "./App.css";

function App() {
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    married: false,
    profilePhoto: null,
  });

  const [employees, setEmployees] = useState([]);

  const [filterDepartment, setFilterDepartment] = useState("All");

  const [sortOrder, setSortOrder] = useState("default");

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;

    setEmployee({
      ...employee,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    setEmployees([...employees, employee]);

    setEmployee({
      name: "",
      age: "",
      address: "",
      department: "",
      salary: "",
      married: false,
      profilePhoto: null,
    });
  }

  function handleDelete(index) {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  }

  let filteredEmployees =
    filterDepartment === "All"
      ? [...employees]
      : employees.filter((emp) => emp.department === filterDepartment);

  if (sortOrder === "asc") {
    filteredEmployees.sort((a, b) => Number(a.salary) - Number(b.salary));
  }

  if (sortOrder === "desc") {
    filteredEmployees.sort((a, b) => Number(b.salary) - Number(a.salary));
  }

  return (
    <div className="container">
      <h1>Employee Details Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={employee.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            min="18"
            placeholder="Enter Age"
            value={employee.age}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            value={employee.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <select
            name="department"
            value={employee.department}
            onChange={handleChange}
          >
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            min="0"
            placeholder="Enter Salary"
            value={employee.salary}
            onChange={handleChange}
          />
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="married"
            name="married"
            checked={employee.married}
            onChange={handleChange}
          />
          <label htmlFor="married">Married</label>
        </div>

        <div className="form-group">
          <label>Profile Photo</label>
          <input type="file" name="profilePhoto" onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div className="form-group">
        <label>Filter By Department</label>

        <select
          value={filterDepartment}
          onChange={(e) => setFilterDepartment(e.target.value)}
        >
          <option value="All">All</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Sales">Sales</option>
        </select>
      </div>

      <div className="form-group">
        <label>Sort Salary</label>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <Table employees={filteredEmployees} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
