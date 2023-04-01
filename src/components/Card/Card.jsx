import React from "react";

const Card = () => {
	return (
		<div className="container mx-auto my-5 grid grid-cols-1 md:grid-cols-3 gap-6">
			<div className="card w-full bg-base-100 shadow-xl border border-[#11111199]">
				<div className="card-body">
					<h2 className="card-title text-3xl">
						What is the difference between props and state?
					</h2>
					<p>
						props are read-only data that are passed down from the
						parent to the child components, while state is mutable
						data that is owned and managed by a component and can be
						changed by the component itself.
					</p>
				</div>
			</div>
			<div className="card w-full bg-base-100 shadow-xl border border-[#11111199]">
				<div className="card-body">
					<h2 className="card-title text-3xl">
						How does work useState()?
					</h2>
					<p>
						useState() is a React Hook function that allows
						functional components in React to manage state. It
						returns an array with two elements - the current state
						value and a function to update the state.
					</p>
				</div>
			</div>
			<div className="card w-full bg-base-100 shadow-xl border border-[#11111199]">
				<div className="card-body">
					<h2 className="card-title text-3xl">
						How does work useEffect() except data load?
					</h2>
					<p>
						useEffect() can be used for a variety of side effects
						beyond data loading, such as updating the document
						title, subscribing to events, and performing animations.
					</p>
				</div>
			</div>
			<div className="card w-full bg-base-100 shadow-xl border border-[#11111199]">
				<div className="card-body">
					<h2 className="card-title text-3xl">
						How does React work?
					</h2>
					<p>
						React is a JavaScript library for building user
						interfaces. It works by creating a virtual
						representation of the UI, which is then rendered to the
						DOM. React's approach to rendering UI is efficient
						because it minimizes the number of manipulations that
						need to be made to the actual DOM, which can be slow and
						resource-intensive. Instead, React only updates the
						parts of the DOM that have changed, resulting in a
						faster and more responsive UI.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
