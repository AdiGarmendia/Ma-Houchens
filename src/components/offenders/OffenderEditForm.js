import React, { useState, useEffect } from "react";
import OffenderManager from "../../modules/OffenderManager";
import "./OffenderForm.css";
import LocationManager from "../../modules/LocationManager";

const OffenderEditForm = (props) => {
	const [offender, setOffender] = useState({
		name: "",
		gender: "",
		age: "",
		offense: "",
		date: "",
		dateEnd: "",
		locationId: "",
	});
	const [local, setLocal] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getLocations = () => {
		return LocationManager.getAll().then((local) => {
			setLocal(local);
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
			gender: offender.gender,
			offense: offender.offense,
			age: offender.age,
			date: offender.date,
			dateEnd: offender.dateEnd,
			locationId: offender.locationId,
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
							id="locationId"
							value={offender.locationId}
							onChange={handleFieldChange}
						>
							{local.map((local) => (
								<option key={local.id} value={local.id}>
									{local.name}
								</option>
							))}
						</select>
						<label htmlFor="locationId">Location</label>
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
