import React, { useState, useEffect } from "react";
import OffenderManager from "../../modules/OffenderManager";
import OffenderCard from "./OffenderCard";
import "./Offender.css";

const OffenderList = (props) => {
	const [offenders, setOffenders] = useState([]);

	const getOffenders = () => {
		return OffenderManager.getAll().then((offendersFromAPI) => {
			setOffenders(offendersFromAPI);
		});
	};

	const deleteOffender = (id) => {
		OffenderManager.delete(id).then(() =>
			OffenderManager.getAll().then(setOffenders)
		);
	};

	useEffect(() => {
		getOffenders();
	}, []);

	return (
		<>
			<section className="section-content">
				<button
					type="button"
					className="btn"
					onClick={() => {
						props.history.push("/offenders/new");
					}}
				>
					Add offender
				</button>
			</section>
			<div className="container-cards">
				{offenders.map((offender) => (
					<OffenderCard
						key={offender.id}
						offender={offender}
						deleteOffender={deleteOffender}
						{...props}
					/>
				))}
			</div>
		</>
	);
};
export default OffenderList;
