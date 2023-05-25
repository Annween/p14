import React, { useState } from 'react';

import DateTimePicker from "react-datetime-picker";

function DatetimePicker(props) {
	const [value, onChange] = useState(new Date());

	return (
		<DateTimePicker id={props.id}  showIcon onChange={onChange} value={value} />
	);
}

export default DatetimePicker;
