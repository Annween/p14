import React from "react";
import DatePicker from "react-datepicker";
import "./DateInput.css"
import "react-datepicker/dist/react-datepicker.css";

const DateInput = (props) => {
	return (
		<DatePicker selected={props.date} onChange={(date) => props.setDate(date)}  />
	);
};

export default DateInput;
