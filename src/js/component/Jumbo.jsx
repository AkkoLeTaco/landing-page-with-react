import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
const Jumbotron = (props) => {
	let back = {
		width: "60%",
		margin: "0 auto",
	};
	return (
		<div style={back} className="jumbotron bg-light">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
};
export default Jumbotron;
