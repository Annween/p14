import React, {useContext} from "react";
import "./employee.css";
import {Link} from "react-router-dom";

import Table from "../../component/Table/";
import {EmployeeListContext} from "../../contexts/employeeList";

const Employee = () => {

	const columns = ["First Name", "Last Name", "Date of Birth", "Date of Hire", "Address", "City", "State", "Zip Code", "Department"];
	const {employeeList} = useContext(EmployeeListContext);


	if (!employeeList) {
		return <p>Aucune donnée de formulaire n'est disponible.</p>;
	}


	return <div className="container">
		<h3>Current Employees</h3>
		<Table data={employeeList} columns={columns}/>
		<Link to={"/"}>Back to Home</Link>
	</div>;

}

export default Employee;
