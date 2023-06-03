import React from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import Employee from "./pages/Employee/employee";




function Router() {
	return<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/employees" element={<Employee/>}/>
		</Routes>
	</BrowserRouter>;

}

export default Router;
