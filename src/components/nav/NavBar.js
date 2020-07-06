import React from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
	const handleLogout = () => {
		props.clearEmployee();
		props.history.push("/");
	};
	return (
		<header>
			<div className="header-style">
				<picture>
					<img className="logoImg" src={require("./logo.png")} alt="logo" />
				</picture>
				<h1 className="site-title">
					Ma Houchens Security
					<br />
					<small>
						Keeping things safe until my offspring pyramid scheme pays off.....
					</small>
				</h1>
			</div>
			<nav>
				<ul className="container">
					<li>
						<NavLink
							exact
							className="nav-link"
							to="/chart"
							activeClassName="selected"
						>
							{" "}
							Chart{" "}
						</NavLink>
					</li>
					{props.hasEmployee ? (
						<li>
							<NavLink
								className="nav-link"
								to="/offenders"
								activeClassName="selected"
							>
								{" "}
								Offenders{" "}
							</NavLink>
						</li>
					) : null}
					<li>
						<NavLink
							className="nav-link"
							to="/location"
							activeClassName="selected"
						>
							{" "}
							Locations{" "}
						</NavLink>
					</li>
					{props.hasEmployee ? (
						<li>
							<NavLink
								className="nav-link"
								to="/employees"
								activeClassName="selected"
							>
								{" "}
								Employees{" "}
							</NavLink>
						</li>
					) : null}
					{props.hasEmployee ? (
						<li>
							<span className="nav-link" onClick={handleLogout}>
								{" "}
								Logout{" "}
							</span>
						</li>
					) : (
						<li>
							<NavLink
								className="nav-link"
								to="/login"
								activeClassName="selected"
							>
								Login
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default withRouter(NavBar);
