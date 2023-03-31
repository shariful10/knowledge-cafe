import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

const App = () => {
	return (
		<div>
			<Header />
			<div className="container mx-auto grid md:grid-cols-3 gap-6">
				<Home />
				<SideCart />
			</div>
		</div>
	);
};

export default App;
