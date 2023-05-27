import React from "react";

const DateConverter = (props) => {
	const date = new Date(props.date);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const formattedDate = `${month}/${day}/${year}`;
	return <span>{formattedDate}</span>;
}

export default DateConverter;
