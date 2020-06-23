import React from "react";
import "./Offender.css";
import { Link } from "react-router-dom";

const OffenderCard = (props) => {
	return (
		<div className="card">
			<div className="card-content">
				<h3>
					Name: <span className="card-offendername">{props.offender.name}</span>
				</h3>
				<p>Gender: {props.offender.gender}</p>
				<p>Age: {props.offender.age}</p>
				<p>Offense: {props.offender.offense}</p>
				<p>Date Committed: {props.offender.date}</p>
				<p>Ban Ends: {props.offender.dateEnd}</p>
				<Link to={`/offenders/${props.offender.id}`}>
					<button>Details</button>
				</Link>
				<button
					type="button"
					onClick={() =>
						props.history.push(`/offenders/${props.offender.id}/edit`)
					}
				>
					Edit
				</button>
				<button
					type="button"
					onClick={() => props.deleteOffender(props.offender.id)}
				>
					Lift Ban
				</button>
			</div>
		</div>
	);
};

export default OffenderCard;
