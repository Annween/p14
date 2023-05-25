import React from "react";

const Table = (props) => {

	return <div className="table-responsive">
		<table className="table table-striped table-bordered">
			<thead>
			<tr>
				{props.columns && props.columns.length > 0 ? props.columns.map((column, index) => {
					return <th key={index}>{column}</th>

				}) : <th>No Columns Found</th> }
			</tr>
			</thead>
			<tbody>
			<tr>
			{props.data && props.data.length > 0 ? props.data.map((employee, index) => {
				return <td key={index}>{employee}</td>
				 }
			) : <tr><td colSpan="15">No Employees Found</td></tr>}
			</tr>
			</tbody>
		</table>
	</div>

}

export default Table;
