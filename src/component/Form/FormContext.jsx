import React, {createContext, useState} from "react";


export const FormContext = createContext({});
export const FormProvider = ({ children }) => {

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
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	}

	return (
		<FormContext.Provider value={{ formData, handleInputChange }}>
			{children}
		</FormContext.Provider>
	);
};


