import React from "react";
import "./home.css";
import Form from "../../component/Form";
import Confirmation from "../../component/Modal";
import {Link} from "react-router-dom";


function Home() {
	return <section>
		<div className="title">
			<h1>HRnet</h1>
		</div>
		<div className="container">
			<Link to={"/employees"}>View Current Employees</Link>
			<h2>Create Employee</h2>
			<Form/>
		</div>
		<Confirmation title="Employee Created" message="Employee has been created successfully!"/>
	</section>;
}

export default Home;
