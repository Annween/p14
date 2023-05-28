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
				 <tr key={props.data.zipCode}>
					<td>{props.data.firstName}</td>
					<td>{props.data.lastName}</td>
					<td><DateConverter date={props.data.dateOfBirth} /></td>
					<td><DateConverter date={props.data.startDate} /></td>
					<td>{props.data.street}</td>
					<td>{props.data.city}</td>
					<td>{props.data.state}</td>
					<td>{props.data.zipCode}</td>
					<td>{props.data.department}</td>
				</tr>

		</tbody>
	</table>
</div>;

};


export default Table;
