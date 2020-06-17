import { Route } from "react-router-dom";
import React from "react";
// import Home from "./home/Home";
import Login from "./auth/Login";

const ApplicationViews = (props) => {
	const hasEmployee = props.hasEmployee;
	const setEmployee = props.setEmployee;
	return (
		<React.Fragment>
			{/* <Route
				exact
				path="/"
				render={(props) => {
					return <Home />;
				}}
			/> */}
			<Route
				path="/login"
				render={(props) => {
					return <Login setEmployee={setEmployee} {...props} />;
				}}
			/>
		</React.Fragment>
	);
};

export default ApplicationViews;
