import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import MaHouchens from "./components/MaHouchens";

ReactDOM.render(
	<Router>
		<MaHouchens />
	</Router>,
	document.getElementById("root")
);
