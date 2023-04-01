import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./components/Card/Card";

const App = () => {
	const [readTime, setReadTime] = useState("");
	const [bookmark, setBookmark] = useState([]);
	const [count, setCount] = useState(0);

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

	const handleBookmarkedBlog = (length, title) => {
		setCount(count + 1);
		const blogs = { length, title };
		let bookmark = [];
		const previousBookmarked = JSON.parse(localStorage.getItem("bookmark"));

		if (previousBookmarked) {
			const existingBookmark = previousBookmarked.find(
				(b) => b.title === title
			);

			if (existingBookmark) {
				toast.error("🦄 Bookmark Already Exist!", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			} else {
				bookmark.push(...previousBookmarked, blogs);
				localStorage.setItem("bookmark", JSON.stringify(bookmark));
				setBookmark(bookmark);
			}
		} else {
			bookmark.push(blogs);
			localStorage.setItem("bookmark", JSON.stringify(bookmark));
			setBookmark(bookmark);
		}
	};

	return (
		<div className="">
			<Header />
			<div className="px-4 md:px-0">
				<div className="container md:mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-6">
					<Home
						handleReadTime={handleReadTime}
						handleBookmarkedBlog={handleBookmarkedBlog}></Home>
					<SideCart
						count={count}
						readTime={readTime}
						bookmark={bookmark}></SideCart>
					<ToastContainer />
				</div>
			</div>
			<Card />
		</div>
	);
};

export default App;
