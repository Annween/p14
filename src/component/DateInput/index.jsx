import React, {useContext, useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "./DateInput.css";
import "react-datepicker/dist/react-datepicker.css";
import { EmployeeListContext } from "../../contexts/employeeList";

const DateInput = ({fieldName, date, handleInputChange}) => {
	return (
		<DatePicker
			selected={date}
			onChange={(date) => handleInputChange({target: {name: fieldName, value: date}})}
		/>
	);
};

export default DateInput;
