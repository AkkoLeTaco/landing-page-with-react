import React from "react";
import Jumbotron from "./Jumbo.jsx";
import Navbar from "./Navbar.jsx";
import Cards from "./card.jsx";
import Foot from "./footer.jsx";

//include images into your bundle

//create your first component
const Home = (props) => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="card-group">
				<Cards
					title="Card title"
					description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					buttonLabel="Go somewhere"
					buttonURL="#"
				/>
				;
				<Cards
					title="Card title"
					description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					buttonLabel="Go somewhere"
					buttonURL="#"
				/>
				;
				<Cards
					title="Card title"
					description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					buttonLabel="Go somewhere"
					buttonURL="#"
				/>
				;
				<Cards
					title="Card title"
					description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
					buttonLabel="Go somewhere"
					buttonURL="#"
				/>
				;
			</div>
			<Foot />
		</div>
	);
};

export default Home;
