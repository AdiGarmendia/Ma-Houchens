import React, { useState, useEffect } from "react";
//import the components we will need
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeList.css";

const EmployeeList = (props) => {
	const [employees, setEmployees] = useState([]);

	const getEmployees = () => {
		return EmployeeManager.getAll().then((employeesFromAPI) => {
			setEmployees(employeesFromAPI);
		});
	};
	const deleteEmployee = (id) => {
		EmployeeManager.delete(id).then(() =>
			EmployeeManager.getAll().then(setEmployees)
		);
	};

	useEffect(() => {
		getEmployees();
	}, []);

	return (
		<>
			<div className="container-cards">
				{employees.map((employee) => (
					<EmployeeCard
						key={employee.id}
						employee={employee}
						deleteEmployee={deleteEmployee}
						{...props}
					/>
				))}
			</div>
		</>
	);
};
export default EmployeeList;
