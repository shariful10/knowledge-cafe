import React, { useEffect, useState } from "react";
import Bookmark from "../Bookmark/Bookmark";

const SideCart = ({ readTime, bookmark }) => {
	const [time, setTime] = useState(readTime);
	// const [bookmarked, setBookmarked] = useState(bookmark);

	useEffect(() => {
		const getReadTime = localStorage.getItem("readTime");

		if (getReadTime) {
			setTime(getReadTime);
		} else {
			setTime(0);
		}
	}, [readTime]);

	// useEffect(() => {
	// 	const getBookmark = JSON.parse(localStorage.getItem("bookmark"));

	// 	if (getBookmark) {
	// 		setBookmarked(getBookmark);
	// 	} else {
	// 		setBookmarked(
	// 			"How to get your first job as a self-taught programmer"
	// 		);
	// 	}
	// }, [bookmark]);

	return (
		<div className="mb-5">
			<div>
				<h3 className="border border-primary text-[18px] md:text-2xl font-bold text-primary text-center rounded-lg py-[20px] bg-[#6047EC1A] mb-6">
					Spent time on read : {time} min
				</h3>
			</div>
			<div className="bg-[#1111110D] p-[30px] rounded-lg">
				<Bookmark bookmark={bookmark}></Bookmark>
			</div>
		</div>
	);
};

export default SideCart;
