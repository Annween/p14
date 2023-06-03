import './App.css';
import React from 'react';
import Router from './Router';
import {EmployeeListProvider} from "./contexts/employeeList";

function App() {
	return (
		<EmployeeListProvider>
			<Router/>
		</EmployeeListProvider>
	);
}

export default App;
