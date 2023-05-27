import React, {useEffect} from "react";
import "./employee.css";

import {Link} from "react-router-dom";

import Table from "../../component/Table/";

function Employee() {
	//const [employees, setEmployees] = React.useState([]);

	const columns = ["First Name", "Last Name", "Date of Birth", "Date of Hire", "Address", "City", "State", "Zip Code", "Department"];

	//const employees = JSON.parse(localStorage.getItem('employees'));

	const [employeeData, setEmployeeData] = React.useState([]);

	useEffect(() => {
		const storedEmployees = localStorage.getItem('employees');
		if (storedEmployees) {
			const parsedEmployees = JSON.parse(storedEmployees);
			setEmployeeData(parsedEmployees);
		}
	}, []);

	if (!employeeData) {
		return <p>Aucune donnée de formulaire n'est disponible.</p>;
	}

	return <div className="container">
		<h3>Current Employees</h3>
		<Table data={employeeData} columns={columns} />
		<Link to={"/"}>Back to Home</Link>
	</div>;



}

export default Employee;
