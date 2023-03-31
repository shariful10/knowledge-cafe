import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ blog }) => {
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
						src={blog.cover_img}
						alt=""
					/>
					<div>
						<h5 className="text-2xl font-bold">{blog.name}</h5>
						<p className="text-[16px] text-[#11111199] font-semibold">
							{blog.published}
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center gap-2">
					<p className="text-[20px] text-[#11111199]">
						{blog.time} min read
					</p>
					<FontAwesomeIcon icon={faBookmark} />
				</div>
			</div>
			<h1 className="text-3xl md:text-[40px] font-bold md:pe-60 my-6">
				{blog.title}
			</h1>
			<div className="flex gap-4 mb-[21px] mt-4">
				<p className="text-[20px] text-[#11111199]">#beginners</p>
				<p className="text-[20px] text-[#11111199]">#programming</p>
			</div>
			<a
				className="underline text-primary text-[20px] font-semiboldmb-10"
				href="/">
				Mark as read
			</a>
			<div className="bg-primary">
				<hr className="bg-black my-5" />
			</div>
		</div>
	);
};

export default Blog;
