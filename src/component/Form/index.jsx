import React, {useState, useEffect} from "react";
import DateTimePicker from 'react-datetime-picker';


const Form = () => {

	const [states, setStates] = useState([])
	const [isSubmitted, setIsSubmitted] = useState(false)

	const [value, onChange] = useState(new Date());
	async function getStates() {
		const response = await fetch('/api/data.json')
		return await response.json();
	}


	useEffect(() => {
		let mounted = true;
		getStates()
			.then(items => {
				if(mounted) {
					setStates(items.states)
				}
			})
		return () => mounted = false;
	}, [])

	function handleSubmit(event) {
		//push to local storage
		event.preventDefault();
		//get values and push to local storage
		const firstName = document.getElementById("first-name").value;
		const lastName = document.getElementById("last-name").value;
		const dateOfBirth = document.getElementById("date-of-birth").value;
		const startDate = document.getElementById("start-date").value;
		const street = document.getElementById("street").value;
		const city = document.getElementById("city").value;
		const state = document.getElementById("state").value;
		const zipCode = document.getElementById("zip-code").value;
		const department = document.getElementById("department").value;

		const employee = {
			firstName,
			lastName,
			dateOfBirth,
			startDate,
			street,
			city,
			state,
			zipCode,
			department
		}
		localStorage.setItem('employees', JSON.stringify(employee));

	}

	return <div className="container">
		<form action="#" id="create-employee" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="first-name">First Name</label>
				<input className="form-control" type="text" id="first-name"/>
			</div>

			<div className="form-group">
				<label htmlFor="last-name">Last Name</label>
				<input className="form-control" type="text" id="last-name"/>
			</div>
			<div className="form-group">
				<label htmlFor="date-of-birth">Date of Birth</label>
			</div>

			<div className="form-group">
				<label htmlFor="start-date">Start Date</label>
				<DateTimePicker id="start-date"  showIcon onChange={onChange} value={value} />
			</div>

			<fieldset className="address">
				<legend>Address</legend>

				<div className="form-group">
					<label htmlFor="street">Street</label>
					<input className="form-control" id="street" type="text"/>
				</div>

				<div className="form-group">
					<label htmlFor="city">City</label>
					<input className="form-control" id="city" type="text"/>
				</div>

				<div className="form-group">
					<label htmlFor="state">State</label>
					<select className="form-select" name="state" id="state">
						{states.map((state) => (
							<option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
						))}
					</select>
				</div>

				<div className="form-group">
					<label htmlFor="zip-code">Zip Code</label>
					<input className="form-control" id="zip-code" type="number"/>
				</div>
			</fieldset>
			<div className="form-group">
				<label htmlFor="department">Department</label>
				<select name="department" className="form-select" id="department">
					<option>Sales</option>
					<option>Marketing</option>
					<option>Engineering</option>
					<option>Human Resources</option>
					<option>Legal</option>
				</select>
			</div>

		</form>
		<button className="btn btn-primary" id="submit">Submit</button>
	</div>;
}

export default Form;
