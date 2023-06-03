import React from "react";
import DatePicker from "react-datepicker";
import "./DateInput.css";
import "react-datepicker/dist/react-datepicker.css";


const DateInput = ({fieldName, date, handleInputChange}) => {
	return (
		<DatePicker
			selected={date}
			onChange={(date) => handleInputChange({target: {name: fieldName, value: date}})}
		/>
	);
};

export default DateInput;
