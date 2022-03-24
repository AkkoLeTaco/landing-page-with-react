import React from "react";
import Jumbotron from "./Jumbo.jsx";
import Navbar from "./Navbar.jsx";
import Cards from "./card.jsx";
import Foot from "./footer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Foot />
		</div>
	);
};

export default Home;
