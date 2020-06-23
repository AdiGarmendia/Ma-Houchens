import React, { useState, useEffect } from "react";
import OffenderManager from "../../modules/OffenderManager";
import LocationManager from "../../modules/LocationManager";
import "./OffenderForm.css";

const OffenderForm = (props) => {
	const [offender, setOffender] = useState({
		name: "",
		gender: "",
		age: "",
		offense: "",
		date: "",
		dateEnd: "",
		locationId: "",
	});
	const [locations, setLocations] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getLocations = () => {
		return LocationManager.getAll().then((local) => {
			setLocations(local);
		});
	};

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

	useEffect(() => {
		getLocations();
	}, []);

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
							id="gender"
							placeholder="Gender"
						/>
						<label htmlFor="Gender">Gender</label>
						<input
							type="text"
							required
							onChange={handleFieldChange}
							id="age"
							placeholder="Age"
						/>
						<label htmlFor="Age">Age</label>
						<input
							type="text"
							required
							onChange={handleFieldChange}
							id="offense"
							placeholder="offense"
						/>
						<label htmlFor="offense">offense</label>
						<input
							type="date"
							required
							onChange={handleFieldChange}
							id="date"
							placeholder="date"
						/>
						<label htmlFor="Date Committed">Date Committed</label>
						<input
							type="date"
							required
							onChange={handleFieldChange}
							id="dateEnd"
							placeholder="date"
						/>
						<label htmlFor="Date Ban Ends">Date Ban Ends</label>
						<select id="locationId" onChange={handleFieldChange}>
							<option value="">Store</option>
							{locations.map((local) => (
								<option key={local.id} value={local.id}>
									{local.store}
								</option>
							))}
						</select>
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
