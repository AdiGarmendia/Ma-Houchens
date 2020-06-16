import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";

const ApplicationViews = () => {
	return (
		<React.Fragment>
			<Route
				exact
				path="/"
				render={(props) => {
					return <Home />;
				}}
			/>
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
