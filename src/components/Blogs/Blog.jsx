import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
	const { handleReadTime } = props;
	const {cover_img, img, name, time, title} = props.blog;
	const handleBookmarkedBlog = props.handleBookmarkedBlog;
	return (
		<div>
			<img
				className="w-full rounded-lg mb-8"
				src={cover_img}
				alt=""
			/>
			<div className="flex justify-between">
				<div className="flex gap-4">
					<img
						className="rounded-[50%] w-12 h-12"
						src={img}
						alt=""
					/>
					<div>
						<h5 className="text-[18px] md:text-2xl font-bold">
							{name}
						</h5>
						<p className="text-[16px] text-[#11111199] font-semibold">
							Mar 14 (4 Days ago)
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center gap-2">
					<p className="text-[20px] text-[#11111199]">
						{time} min read
					</p>
					<button
						onClick={() =>
							handleBookmarkedBlog(props.blog)
						}>
						<FontAwesomeIcon icon={faBookmark} />
					</button>
				</div>
			</div>
			<h1 className="text-2xl md:text-[40px] font-bold md:pe-60 my-6 leading-[50px]">
				{title}
			</h1>
			<div className="flex gap-4 mb-[21px] mt-4">
				<p className="text-[20px] text-[#11111199]">#beginners</p>
				<p className="text-[20px] text-[#11111199]">#programming</p>
			</div>
			<button
				onClick={() => handleReadTime(time)}
				className="underline text-primary text-[20px] font-semiboldmb-10">
				Mark as read
			</button>
			<hr className="bg-black my-5" />
		</div>
	);
};

export default Blog;
