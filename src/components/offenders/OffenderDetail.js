import React, { useState, useEffect } from "react";
import OffenderManager from "../../modules/OffenderManager";
import "./OffenderDetail.css";

const OffenderDetail = (props) => {
	const [offender, setoffender] = useState({ name: "", offense: "" });
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		OffenderManager.get(props.offenderId).then((offender) => {
			setoffender({
				name: offender.name,
				offense: offender.offense,
			});
			setIsLoading(false);
		});
	}, [props.offenderId]);
	const handleDelete = () => {
		setIsLoading(true);
		offenderManager
			.delete(props.offenderId)
			.then(() => props.history.push("/offenders"));
	};

	return (
		<div className="card">
			<div className="card-content">
				<h3>
					Name: <span style={{ color: "darkslategrey" }}>{offender.name}</span>
				</h3>
				<p>Offense: {offender.offense}</p>
				<button type="button" disabled={isLoading} onClick={handleDelete}>
					Lift Ban
				</button>
			</div>
		</div>
	);
};

export default OffenderDetail;
