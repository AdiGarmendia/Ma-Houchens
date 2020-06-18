import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
	return (
		<div className="card">
			<div className="locationCard-content">
				<address>
					{props.location.area}
					<br />
					{props.location.address}
				</address>
				<Link to={`/location/${props.location.id}`}>
					<button>Details</button>
				</Link>
				<button
					type="button"
					onClick={() =>
						props.history.push(`/location/${props.location.id}/edit`)
					}
				>
					Edit
				</button>
			</div>
		</div>
	);
};

export default LocationCard;
