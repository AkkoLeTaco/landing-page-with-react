import React from "react";

//include images into your bundle

//create your first component
const Foot = () => {
	let footPos = {
		bottom: "0",
	};
	return (
		<nav className="navbar navbar-light bg-dark text-center d-flex justify-content-center fixed-bottom">
			<span className="navbar-brand mb-0 h1 text-light">footer</span>
		</nav>
	);
};

export default Foot;
