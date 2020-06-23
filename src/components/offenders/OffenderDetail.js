import React, { useState, useEffect } from "react";
import OffenderManager from "../../modules/OffenderManager";
import LocationManager from "../../modules/LocationManager";
import "./OffenderDetail.css";

const OffenderDetail = (props) => {
	const [offender, setoffender] = useState({
		name: "",
		gender: "",
		age: "",
		offense: "",
		date: "",
		dateEnd: "",
		locationId: "",
	});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		OffenderManager.get(props.offenderId).then((offender) => {
			setoffender({
				name: offender.name,
				gender: offender.gender,
				age: offender.age,
				offense: offender.offense,
				date: offender.date,
				dateEnd: offender.dateEnd,
				locationId: LocationManager.get(offender.locationId).then((local) => {
					console.log(local);
					offender.local = local.store;
				}),
			});
			setIsLoading(false);
		});
	}, [props.offenderId]);

	const handleDelete = () => {
		setIsLoading(true);
		OffenderManager.delete(props.offenderId).then(() =>
			props.history.push("/offenders")
		);
	};

	return (
		<div className="card">
			<div className="card-content">
				<h3>
					Name: <span style={{ color: "darkslategrey" }}>{offender.name}</span>
				</h3>
				<p>Gender: {offender.gender}</p>
				<p>Age: {offender.age}</p>
				<p>Offense: {offender.offense}</p>
				<p>Date Committed: {offender.date}</p>
				<p>Ban Ends: {offender.dateEnd}</p>
				<p>Location of Offense: {offender.local}</p>
				<button type="button" disabled={isLoading} onClick={handleDelete}>
					Lift Ban
				</button>
			</div>
		</div>
	);
};

export default OffenderDetail;
