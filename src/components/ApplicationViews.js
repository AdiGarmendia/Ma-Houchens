import { Route, Redirect } from "react-router-dom";
import React from "react";
// import Home from "./home/Home";
import Login from "./auth/Login";
import OffenderList from "./offenders/OffenderList";
import OffenderForm from "./offenders/OffenderForm";
import OffenderDetail from "./offenders/OffenderDetail";
import OffenderEditForm from "./offenders/OffenderEditForm";
import LocationDetail from "./locations/LocationDetail";
import LocationForm from "./locations/LocationForm";
import LocationList from "./locations/LocationList";
import EmployeeList from "./employees/EmployeeList";

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
			<Route
				exact
				path="/offenders"
				render={(props) => {
					if (hasEmployee) {
						return <OffenderList {...props} />;
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
			{/* // Our shiny new route. */}
			<Route
				path="/offenders/new"
				render={(props) => {
					return <OffenderForm {...props} />;
				}}
			/>
			<Route
				exact
				path="/offenders/:offenderId(\d+)"
				render={(props) => {
					// Pass the OffenderId to the OffenderDetailComponent
					return (
						<OffenderDetail
							offenderId={parseInt(props.match.params.offenderId)}
							{...props}
						/>
					);
				}}
			/>
			<Route
				path="/offenders/new"
				render={(props) => {
					return <OffenderForm {...props} />;
				}}
			/>
			<Route
				path="/offenders/:offenderId(\d+)/edit"
				render={(props) => {
					if (hasEmployee) {
						return <OffenderEditForm {...props} />;
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
			<Route
				exact
				path="/location"
				render={(props) => {
					return <LocationList {...props} />;
				}}
			/>
			<Route
				exact
				path="/location/:locationId(\d+)"
				render={(props) => {
					// Pass the animalId to the AnimalDetailComponent
					return (
						<LocationDetail
							locationId={parseInt(props.match.params.locationId)}
							{...props}
						/>
					);
				}}
			/>

			<Route
				exact
				path="/employees"
				render={(props) => {
					if (hasEmployee) {
						return <EmployeeList {...props} />;
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
		</React.Fragment>
	);
};

export default ApplicationViews;
