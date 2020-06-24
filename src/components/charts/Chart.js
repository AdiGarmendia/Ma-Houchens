import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import OffenderManager from "../../modules/OffenderManager";

const Chart = (props) => {
	const [offenseCount, setOffenseCount] = useState([0, 0]);
	// useEffect takes 2 arguements. 1 a function, 2 a array values
	useEffect(() => {
		const getOffenders = () => {
			return OffenderManager.getAll().then((offenders) => {
				let tempArray = [...offenseCount];
				offenders.forEach((offender) => {
					if (offender.locationId === "1") {
						tempArray[0]++;
					} else {
						tempArray[1]++;
					}
				});
				console.log(tempArray);
				setOffenseCount(tempArray);
			});
		};
		getOffenders();
	}, []);

	const storeData = {
		labels: ["Glasgow", "Portland"],
		datasets: [
			{
				label: "Offenses",
				backgroundColor: [
					"#B21F00",
					"#C9DE00",
					"#2FDE00",
					"#00A6B4",
					"#6800B4",
				],
				hoverBackgroundColor: [
					"#501800",
					"#4B5000",
					"#175000",
					"#003350",
					"#35014F",
				],
				data: offenseCount,
			},
		],
	};

	return (
		<div>
			<Pie
				data={storeData}
				options={{
					title: {
						display: true,
						text: "Offenses Per Store",
						fontSize: 20,
					},
					legend: {
						display: true,
						position: "right",
					},
				}}
			/>
		</div>
	);
};

export default Chart;
