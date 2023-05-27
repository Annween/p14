import React, {useState, useEffect} from "react";
import DateInput from "../DateInput";
import Select from "../../component/Select";
import Modal from "../Modal";


const Form = () => {

	const [states, setStates] = useState([])
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [department, setDepartment] = useState("");


	const onChangeDateOfBirth = (newValue) => {
		setDateOfBirth(newValue)
	}

	const onChangeStartDate = (newValue) => {
		setStartDate(newValue)
	}

	const onChangeState = (newValue) => {
		setState(newValue)
	}

	const onChangeDepartement = (newValue) => {
		setDepartment(newValue)
	}


	async function getStates() {
		const response = await fetch('/api/data.json')
		return await response.json();
	}


	useEffect(() => {
		let mounted = true;
		getStates()
			.then(items => {
				if (mounted) {
					setStates(items.states)
				}
			})
		return () => mounted = false;
	}, [])


	function handleSubmit(e) {
		e.preventDefault();
		const employeeData = {
			firstName,
			lastName,
			dateOfBirth,
			startDate,
			street,
			city,
			state,
			zipCode,
			department,
		};
		localStorage.setItem('employees', JSON.stringify(employeeData));
		setIsSubmitted(true);
	}

	/*useEffect(() => {

	localStorage.setItem('employees', JSON.stringify({
		firstName,
		lastName,
		dateOfBirth,
		startDate,
		street,
		city,
		state,
		zipCode,
		department
	}))

		setIsSubmitted(true)
		console.log(localStorage.getItem('employees'))

	}, [firstName, lastName, dateOfBirth, startDate, street, city, state, zipCode, department]);*/




return <div className="container">

	<form action="#" id="create-employee" onSubmit={handleSubmit} >
		<div className="form-group">
			<label htmlFor="firstName">First Name</label>
			<input className="form-control" type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)} />
		</div>

		<div className="form-group">
			<label htmlFor="lastName">Last Name</label>
			<input className="form-control" type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} />
		</div>
		<div className="form-group">
			<label htmlFor="dateOfBirth">Date of Birth</label><br/>
			<DateInput id="dateOfBirth" date={dateOfBirth} setDate={onChangeDateOfBirth}/>
		</div>

		<div className="form-group">
			<label htmlFor="startDate">Start Date</label><br/>
			<DateInput id="startDate" date={startDate} setDate={onChangeStartDate}/>
		</div>

		<fieldset className="address">
			<legend>Address</legend>

			<div className="form-group">
				<label htmlFor="street">Street</label>
				<input className="form-control" id="street" type="text" onChange={(e) => setStreet(e.target.value)}/>
			</div>

			<div className="form-group">
				<label htmlFor="city">City</label>
				<input className="form-control" id="city" type="text" onChange={(e) => setCity(e.target.value)} />
			</div>

			<div className="form-group">
				<label htmlFor="state">State</label>
				<Select name="state" id="state" options={states} selected={state} setValue={setState}/>
			</div>

			<div className="form-group">
				<label htmlFor="zipCode">Zip Code</label>
				<input className="form-control" id="zipCode" type="number" onChange={(e) => setZipCode(e.target.value)} />
			</div>
		</fieldset>
		<div className="form-group">
			<label htmlFor="department">Department</label>
			<Select
				name="department"
				id="department"
				options={[
					{ name: "Human Resources", abbreviation: "HR" },
					{ name: "Engineering", abbreviation: "ENG" },
					{ name: "Sales", abbreviation: "SAL" },
					{ name: "Marketing", abbreviation: "MARK" },
					{ name: "Legal", abbreviation: "L" },
				]}
				setValue={setDepartment}
				selected={department}
			/>
		</div>
		<button type={"submit"} className="btn btn-primary" id="submit">Submit</button>
	</form>
	{isSubmitted &&  <Modal isVisible={true} header="Success" body="Employee successfully created" displayButton={false}  /> }
</div>;
}

export default Form;
