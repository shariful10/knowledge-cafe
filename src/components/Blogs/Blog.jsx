import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = ({blog}) => {
	return (
		<div>
			<img
				className="w-full rounded-lg mb-8"
				src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.2.801630698.1680198391&semt=sph"
				alt=""
			/>
			<div className="flex justify-between">
				<div className="flex gap-4">
					<img
						className="rounded-[50%] w-12 h-12"
						src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.801630698.1680198391&semt=ais"
						alt=""
					/>
					<div>
						<h5 className="text-2xl font-bold">Mr. Raju</h5>
						<p className="text-[16px] text-[#11111199] font-semibold">
							Mar 14 (4 Days ago)
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center gap-2">
					<p className="text-[20px] text-[#11111199]">05 min read</p>
					<FontAwesomeIcon icon={faBookmark} />
				</div>
			</div>
			<h1 className="text-3xl md:text-[40px] font-bold md:pe-60 my-4">
				How to get your first job as a self-taught programmer
			</h1>
			<div className="flex gap-4">
				<p className="text-[20px] text-[#11111199]">#beginners</p>
				<p className="text-[20px] text-[#11111199]">#programming</p>
			</div>
			<a
				className="underline text-primary text-[20px] font-semibold mt-[21px] mb-10"
				href="/">
				Mark as read
			</a>
			<hr />
		</div>
	);
};

export default Blog;
