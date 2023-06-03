import React from "react";



const Select = (props) => {

	return (
		<select
			className="form-select"
			id={props.name}
			name={props.name}
			onChange={props.handleInputChange}
			value={props.value}
			>
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
