import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

const App = () => {
	const [readTime, setReadTime] = useState("");

	const handleReadTime = (time) => {
		const previousReadTime = JSON.parse(localStorage.getItem("readTime"));

		if (previousReadTime) {
			const sum = previousReadTime + time;
			localStorage.setItem("readTime", sum);
			setReadTime(sum);
		} else {
			localStorage.setItem("readTime", time);
			setReadTime(time);
		}
	};

	return (
		<div>
			<Header />
			<div className="px-4 md:px-0">
				<div className="container md:mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-6">
					<Home handleReadTime={handleReadTime}></Home>
					<SideCart readTime={readTime}></SideCart>
				</div>
			</div>
		</div>
	);
};

export default App;
