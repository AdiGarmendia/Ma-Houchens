import React from "react";
import "./Employee.css";

const EmployeeCard = (props) => {
	return (
		<div className="employeeCard">
			<div className="employeeCard-content">
				<h3>
					Employee Name:{" "}
					<span className="employeeCard-name">
						{props.employee.employeeName}
					</span>
				</h3>
				<button
					type="button"
					onClick={() => props.deleteEmployee(props.employee.id)}
				>
					Fire
				</button>
			</div>
		</div>
	);
};

export default EmployeeCard;
