import React from "react";

//include images into your bundle

//create your first component
const Cards = () => {
	let pics = {
		width: "60%",
		margin: "0 auto",
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
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</p>
					<a href="#" class="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://picsum.photos/200/300?random=2"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</p>
					<a href="#" class="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://picsum.photos/200/300?random=3"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This card has supporting text below as a natural lead-in
						to additional content.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</p>
					<a href="#" class="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
			<div className="card">
				<img
					className="card-img-top"
					src="https://picsum.photos/200/300?random=4"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This card has
						even longer content than the first to show that equal
						height action.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</p>
					<a href="#" class="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
export default Cards;
