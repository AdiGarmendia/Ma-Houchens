import React, { useState } from "react";
import OffenderManager from "../../modules/OffenderManager";
import "./OffenderForm.css";

const OffenderForm = (props) => {
	const [offender, setOffender] = useState({ name: "", offense: "" });
	const [isLoading, setIsLoading] = useState(false);

	const handleFieldChange = (evt) => {
		const stateToChange = { ...offender };
		stateToChange[evt.target.id] = evt.target.value;
		setOffender(stateToChange);
	};

	const constructNewOffender = (evt) => {
		evt.preventDefault();
		if (offender.name === "" || offender.offense === "") {
			window.alert("Please input an offender name and offense");
		} else {
			setIsLoading(true);
			OffenderManager.post(offender).then(() =>
				props.history.push("/offenders")
			);
		}
	};

	return (
		<>
			<form>
				<fieldset>
					<div className="formgrid">
						<input
							type="text"
							required
							onChange={handleFieldChange}
							id="name"
							placeholder="offender name"
						/>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							required
							onChange={handleFieldChange}
							id="offense"
							placeholder="offense"
						/>
						<label htmlFor="offense">offense</label>
					</div>
					<div className="alignRight">
						<button
							type="button"
							disabled={isLoading}
							onClick={constructNewOffender}
						>
							Submit
						</button>
					</div>
				</fieldset>
			</form>
		</>
	);
};

export default OffenderForm;
