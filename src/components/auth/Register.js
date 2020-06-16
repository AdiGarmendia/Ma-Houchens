import React, { useState } from "react";

const Register = (props) => {
	const [credentials, setCredentials] = useState({
		employeeName: "",
		email: "",
		password: "",
	});

	const handleFieldChange = (evt) => {
		const stateToChange = { ...credentials };
		stateToChange[evt.target.id] = evt.target.value;
		setCredentials(stateToChange);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		props.setEmployee(credentials);
		props.history.push("/home");
	};

	return (
		<form onSubmit={handleRegister}>
			<fieldset>
				<h3>Please Register</h3>
				<div className="formgrid">
					<input
						onChange={handleFieldChange}
						type="employeeName"
						id="employeeName"
						placeholder="Employee Name"
						required=""
						autoFocus=""
					/>
					<label htmlFor="inputEmail">Email address</label>
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
				</div>
				<button type="submit">Register</button>
			</fieldset>
		</form>
	);
};

export default Register;
