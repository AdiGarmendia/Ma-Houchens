import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";

const MaHouchens = () => {
	const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

	const [hasEmployee, setHasEmployee] = useState(isAuthenticated());

	const clearEmployee = () => {
		sessionStorage.clear();
		setHasEmployee(isAuthenticated());
	};

	const setEmployee = (employee) => {
		sessionStorage.setItem("credentials", JSON.stringify(employee));
		setHasEmployee(isAuthenticated());
	};

	return (
		<>
			<NavBar hasEmployee={hasEmployee} clearEmployee={clearEmployee} />
			<ApplicationViews hasEmployee={hasEmployee} setEmployee={setEmployee} />
		</>
	);
};

export default MaHouchens;
