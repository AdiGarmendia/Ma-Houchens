import React from "react";
import "./Location.css";

const LocationCard = (props) => {
	console.log(props.local);
	return (
		<div className="card">
			<div className="locationCard-content">
				<address>
					{props.local.store}
					<br />
					{props.local.address}
				</address>
			</div>
		</div>
	);
};

export default LocationCard;
