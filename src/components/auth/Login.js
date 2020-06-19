import React, { useState } from "react";
import EmployeeManager from "../../modules/EmployeeManager";

const Login = (props) => {
	const [credentials, setCredentials] = useState({ email: "", password: "" });

	// Update state whenever an input field is edited
	const handleFieldChange = (evt) => {
		const stateToChange = { ...credentials };
		stateToChange[evt.target.id] = evt.target.value;
		setCredentials(stateToChange);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		// if (credentials.email === "" || credentials.password === "") {
		// 	window.alert("Employee Login");
		// } else {
		// 	EmployeeManager.getEmployee(credentials.email).then((employee) => {
		// 		console.log(employee);
		// 		localStorage.setEmployee("credentials", employee[0].id);
		// 		props.history.push("/offenders");
		// 	});
		// }
		props.setEmployee(credentials);
		props.history.push("/home");
	};

	return (
		<form onSubmit={handleLogin}>
			<fieldset>
				<h3>Employee Log In</h3>
				<div className="formgrid">
					<input
						onChange={handleFieldChange}
						type="email"
						id="email"
						placeholder="Email address"
						required=""
						autoFocus=""
					/>
					<label htmlFor="inputEmail">Email address</label>

					<input
						onChange={handleFieldChange}
						type="password"
						id="password"
						placeholder="Password"
						required=""
					/>
					<label htmlFor="inputPassword">Password</label>
				</div>
				<button type="submit">Log in</button>
			</fieldset>
		</form>
	);
};

export default Login;
