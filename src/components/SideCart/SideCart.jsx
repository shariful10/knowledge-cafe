import React, { useEffect, useState } from "react";

const SideCart = ({ readTime, bookmark, count }) => {
	const [time, setTime] = useState(readTime);
	const [bookmarked, setBookmarked] = useState(bookmark);

	useEffect(() => {
		const getReadTime = localStorage.getItem("readTime");

		if (getReadTime) {
			setTime(getReadTime);
		} else {
			setTime(0);
		}
	}, [readTime]);

	useEffect(() => {
		const getBookmark = localStorage.getItem("bookmark");
		if (getBookmark) {
			setBookmarked(JSON.parse(getBookmark));
		} else {
			setBookmarked(
				"How to get your first job as a self-taught programmer"
			);
		}
	}, [bookmarked]);

	return (
		<div className="mb-5">
			<div>
				<h3 className="border border-primary text-[18px] md:text-2xl font-bold text-primary text-center rounded-lg py-[20px] bg-[#6047EC1A] mb-6">
					Spent time on read : {time} min
				</h3>
			</div>
			<div className="bg-[#1111110D] p-[30px] rounded-lg">
				<h3 className="text-[18px] md:text-2xl font-bold">
					Bookmarked Blogs : {count}
				</h3>
				<h4 className="font-semibold text-[16px] md:text-[18px] p-[20px] bg-white rounded-lg my-4">
					How to get your first job as a self-taught programmer
				</h4>
			</div>
		</div>
	);
};

export default SideCart;
