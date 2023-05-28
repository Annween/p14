import React from "react";


const Select = (props) => {
	const handleSelectChange = (event) => {
		const selectedValue = event.target.value;
		props.setValue(selectedValue);
	};

	return (
		<select
			className="form-select"
			id={props.name}
			name={props.name}
			onChange={handleSelectChange}
			value={props.selected}
			required>
			{props.options && props.options.length > 0 ? (
				props.options.map((option, index) => (
					<option key={index} value={option.name}>
						{option.name}
					</option>
				))
			) : (
				<option>No Options Found</option>
			)}
		</select>
	);
};

export default Select;
