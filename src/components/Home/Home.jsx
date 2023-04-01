import React, { useEffect, useState } from "react";
import Blog from "../Blogs/Blog";

const Home = ({ handleReadTime, handleBookmarkedBlog }) => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	return (
		<div className="col-span-2">
			{blogs.map((blog) => (
				<Blog
					key={blog.id}
					blog={blog}
					handleReadTime={handleReadTime}
					handleBookmarkedBlog={handleBookmarkedBlog}></Blog>
			))}
		</div>
	);
};

export default Home;
