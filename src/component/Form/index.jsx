import React, {useState, useEffect, useContext} from "react";
import DateInput from "../DateInput";
import Select from "../../component/Select";
import Modal from "annween-modals/dist";


import "./Form.css";
import {EmployeeListContext} from "../../contexts/employeeList";

function Form() {
	const [states, setStates] = useState([])
	const [isSubmitted, setIsSubmitted] = useState(false)

	const {handleAddEmployee} = useContext(EmployeeListContext);

	//const {formData, handleInputChange} = useContext(FormContext);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		dateOfBirth: new Date(),
		startDate: new Date(),
		street: '',
		city: '',
		state: '',
		zipCode: '',
		department: ''
	});


	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	}

	console.log(formData);


	async function getStates() {
		const response = await fetch('/api/data.json')
		return await response.json();
	}


	const validateInputs = () => {
		const fields = [
			{ name: 'firstName', validation: /^[a-zA-Z]+$/ },
			{ name: 'lastName', validation: /^[a-zA-Z]+$/ },
			{ name: 'street', validation: /^.+$/ },
			{ name: 'city', validation: /^[^\d]+$/ },
			{ name: 'zipCode', validation: /^\d{5}$/ },
			{ name: 'state', validation: /^.+$/ },
			{ name: 'department', validation: /^.+$/ },
		];

		for (const field of fields) {
			const value = formData[field.name];

			if (typeof value !== 'string' || value === '' || !field.validation.test(value)) {
				alert(`Please enter a valid ${field.name}`);
				return false;
			}
		}

		return true;
	};

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
		if (validateInputs()) {
			setIsSubmitted(true);
			handleAddEmployee(formData);
			setFormData({
				firstName: '',
				lastName: '',
				dateOfBirth: new Date(),
				startDate: new Date(),
				street: '',
				city: '',
				state: '',
				zipCode: '',
				department: '',
			});
		}
	}


	return <div className="container">

		<form action="#" id="create-employee" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="firstName">First Name</label>
				<input className="form-control" type="text" id="firstName" name="firstName" value={formData.firstName}
				       onChange={handleInputChange} />
			</div>

			<div className="form-group">
				<label htmlFor="lastName">Last Name</label>
				<input className="form-control" type="text" id="lastName" name="lastName" value={formData.lastName}
				       onChange={handleInputChange} />
			</div>
			<div className="form-group">
				<label htmlFor="dateOfBirth">Date of Birth</label><br/>
				<DateInput fieldName="dateOfBirth" date={formData.dateOfBirth} handleInputChange={handleInputChange}/>
			</div>

			<div className="form-group">
				<label htmlFor="startDate">Start Date</label><br/>
				<DateInput fieldName="startDate" date={formData.startDate} handleInputChange={handleInputChange}/>

			</div>

			<fieldset className="address">
				<legend>Address</legend>

				<div className="form-group">
					<label htmlFor="street">Street</label>
					<input className="form-control" id="street" name="street" type="text" value={formData.street}
					       onChange={handleInputChange} />
				</div>

				<div className="form-group">
					<label htmlFor="city">City</label>
					<input className="form-control" id="city" name="city" type="text" value={formData.city}
					       onChange={handleInputChange} />
				</div>

				<div className="form-group">
					<label htmlFor="state">State</label>
					<Select name="state" id="state" options={states} value={formData.state}
					        handleInputChange={handleInputChange}/>
				</div>

				<div className="form-group">
					<label htmlFor="zipCode">Zip Code</label>
					<input className="form-control" id="zipCode" name="zipCode" type="number" value={formData.zipCode}
					       onChange={handleInputChange}/>
				</div>
			</fieldset>
			<div className="form-group">
				<label htmlFor="department">Department</label>
				<Select
					name="department"
					id="department"
					options={[
						{name: "", abbreviation: ""},
						{name: "Human Resources", abbreviation: "HR"},
						{name: "Engineering", abbreviation: "ENG"},
						{name: "Sales", abbreviation: "SAL"},
						{name: "Marketing", abbreviation: "MARK"},
						{name: "Legal", abbreviation: "L"},
					]}
					handleInputChange={handleInputChange}
					value={formData.department}
				/>
			</div>
			<button type={"submit"} className="btn btn-primary" id="submit">Submit</button>
		</form>
		{isSubmitted &&
			<Modal isVisible={true} header="Success" body="Employee successfully created" displayButton={false}/>}
	</div>
}

export default Form;

