import React from "react";

//include images into your bundle

//create your first component
const Navbar = () => {
	let side = {
		marginLeft: "1200px",
		position: "absolute",
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex flex-row p-2">
			<a className="navbar-brand text-light" href="#">
				Navbar
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul
					className="navbar-nav justify-content-space-around"
					style={side}>
					<li className="nav-item active">
						<a className="nav-link text-light" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							Pricing
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled text-light" href="#">
							Disabled
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
