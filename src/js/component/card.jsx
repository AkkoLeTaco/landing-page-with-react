import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
const Cards = (props) => {
	let pics = {
		width: "18rem",
		margin: "0px 10px 0px 5px",
	};
	return (
		<div style={pics} className="card-group">
			<div className="card">
				<img
					className="card-img-top"
					src="https://picsum.photos/200/300?random=1"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<p className="card-text">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</p>
					<a href={props.buttonURL} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string,
	discription: PropTypes.string,
};
export default Cards;
