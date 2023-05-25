import React from "react";
import "./employee.css";
import {useTable} from 'react-table';
import {Link} from "react-router-dom";

import Table from "../../component/Table/";

function Employee() {
	//const [employees, setEmployees] = React.useState([]);
	//const currentEmployees = JSON.parse(localStorage.getItem('employees'));
	const columns = ["First Name", "Last Name", "Date of Birth", "Date of Hire", "Address", "City", "State", "Zip Code", "Department"];

	//build array

	const data = ["First Name", "Last Name", "Date of Birth", "Date of Hire", "Address", "City", "State", "Zip Code", "Department"];


	return <div className="container">
		<h3>Current Employees</h3>
		<Table columns={columns} data={data}/>
		<Link to={"/"}>Back to Home</Link>
	</div>;


	//const data = React.useMemo(() => currentEmployees, [currentEmployees]);

	/*const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data }); */

	/*return (
		<div className="container">
			<h3>Current Employees</h3>
		<table {...getTableProps()} className="table">
			<thead>
			{headerGroups.map((headerGroup) => (
				<tr {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map((column) => (
						<th {...column.getHeaderProps()}>{column.render('Header')}</th>
					))}
				</tr>
			))}
			</thead>
			<tbody {...getTableBodyProps()}>
			{rows.map((row) => {
				prepareRow(row);
				return (
					<tr {...row.getRowProps()}>
						{row.cells.map((cell) => (
							<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
						))}
					</tr>
				);
			})}
			</tbody>
		</table>
			<Link to={"/"}>Back to Home</Link>
		</div>
	);*/

}

export default Employee;
