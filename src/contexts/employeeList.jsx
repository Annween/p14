import React, {createContext, useState} from "react";

export const EmployeeListContext = createContext({});
export const EmployeeListProvider = ({ children }) => {
	const [employeeList, setEmployeeList] = useState([]);
	const handleAddEmployee = (e) => {
		setEmployeeList([...employeeList, e])
	}



	return (
		<EmployeeListContext.Provider value={{ employeeList, handleAddEmployee }}>
			{children}
		</EmployeeListContext.Provider>
	);
};


