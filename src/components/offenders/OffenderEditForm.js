import React, { useState, useEffect } from "react";
import OffenderManager from "../../modules/OffenderManager";
import "./OffenderForm.css";
import EmployeeManager from "../../modules/EmployeeManager";

const OffenderEditForm = (props) => {
	const [offender, setOffender] = useState({ name: "", offense: "" });
	const [employees, setEmployees] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getEmployees = () => {
		return EmployeeManager.getAll().then((employees) => {
			setEmployees(employees);
		});
	};

	const handleFieldChange = (evt) => {
		const stateToChange = { ...offender };
		stateToChange[evt.target.id] = evt.target.value;
		setOffender(stateToChange);
	};

	const updateExistingOffender = (evt) => {
		evt.preventDefault();
		setIsLoading(true);

		// This is an edit, so we need the id
		const editedOffender = {
			id: props.match.params.offenderId,
			name: offender.name,
			offense: offender.offense,
			employeeId: parseInt(offender.employeeId),
		};

		OffenderManager.update(editedOffender).then(() =>
			props.history.push("/offenders")
		);
	};

	useEffect(() => {
		OffenderManager.get(props.match.params.offenderId).then((offender) => {
			setOffender(offender);
			setIsLoading(false);
		});
	}, []);

	useEffect(() => {
		getEmployees();
	}, []);

	return (
		<>
			<form>
				<fieldset>
					<div className="formgrid">
						<input
							type="text"
							required
							className="form-control"
							onChange={handleFieldChange}
							id="name"
							value={offender.name}
						/>
						<label htmlFor="name">Offender name</label>

						<input
							type="text"
							required
							className="form-control"
							onChange={handleFieldChange}
							id="gender"
							value={offender.gender}
						/>
						<label htmlFor="gender">Gender</label>

						<input
							type="text"
							required
							className="form-control"
							onChange={handleFieldChange}
							id="age"
							value={offender.age}
						/>
						<label htmlFor="age">Age</label>

						<input
							type="text"
							required
							className="form-control"
							onChange={handleFieldChange}
							id="offense"
							value={offender.offense}
						/>
						<label htmlFor="offense">Offense</label>
						<input
							type="date"
							required
							className="form-control"
							onChange={handleFieldChange}
							id="date"
							value={offender.date}
						/>
						<label htmlFor="date committed">Date Committed</label>
						<input
							type="date"
							required
							className="form-control"
							onChange={handleFieldChange}
							id="dateEnd"
							value={offender.dateEnd}
						/>
						<label htmlFor="date ends">Date Ban Ends</label>
						<select
							className="form-control"
							id="employeeId"
							value={offender.employeeId}
							onChange={handleFieldChange}
						>
							{employees.map((employee) => (
								<option key={employee.id} value={employee.id}>
									{employee.name}
								</option>
							))}
						</select>
						<label htmlFor="employeeId">Employee</label>
					</div>
					<div className="alignRight">
						<button
							type="button"
							disabled={isLoading}
							onClick={updateExistingOffender}
							className="btn btn-primary"
						>
							Submit
						</button>
					</div>
				</fieldset>
			</form>
		</>
	);
};

export default OffenderEditForm;
