import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import OffenderManager from "../../modules/OffenderManager";

// const offenseData = (props) => {
// 	const [offenses, setOffenses] = useState([]);

// 	const getOffenders = () => {
// 		return OffenderManager.getAll().then((offendersFromAPI) => {
// 			setOffenses(offendersFromAPI.locationId);
// 		});
// 	};

const data = {
	labels: ["Glasgow", "Portland"],
	datasets: [
		{
			label: "Offenses",
			backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
			hoverBackgroundColor: [
				"#501800",
				"#4B5000",
				"#175000",
				"#003350",
				"#35014F",
			],
			data: [3, 6],
		},
	],
};

class Chart extends React.Component {
	render() {
		return (
			<div>
				<Pie
					data={data}
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
	}
}

export default Chart;
