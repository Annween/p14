import React from "react";
import DateConverter from "../DateConverter";

import "./Table.css";
const Table = (props) => {

return <div className="table-responsive">
	<table className="table table-striped table-bordered">
		<thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Date of Birth</th>
				<th>Date of Hire</th>
				<th>Street</th>
				<th>City</th>
				<th>State</th>
				<th>Zip Code</th>
				<th>Department</th>
			</tr>
		</thead>
		<tbody>
			{props.data.map((employee, index) => {
				return <tr key={index}>
					<td>{employee.firstName}</td>
					<td>{employee.lastName}</td>
					<td><DateConverter date={employee.dateOfBirth}/></td>
					<td><DateConverter date={employee.startDate}/></td>
					<td>{employee.street}</td>
					<td>{employee.city}</td>
					<td>{employee.state}</td>
					<td>{employee.zipCode}</td>
					<td>{employee.department}</td>
				</tr>;
			}
			)}

		</tbody>
	</table>
</div>;

};


export default Table;
