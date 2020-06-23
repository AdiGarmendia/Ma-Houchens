import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import LocationCard from "./LocationCard";

const LocationDetail = (props) => {
	const [locations, setLocations] = useState([]);

	const getLocations = () => {
		return LocationManager.getAll().then((locations) => {
			console.log(locations);
			setLocations(locations);
		});
	};

	useEffect(() => {
		getLocations();
	}, []);

	return (
		<>
			<div className="container-cards">
				{locations.map((local) => (
					<LocationCard key={local.id} local={local} {...props} />
				))}
			</div>
		</>
	);
};

export default LocationDetail;
