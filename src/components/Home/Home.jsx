import React, { useEffect, useState } from "react";
import { data } from "autoprefixer";
import Blog from "../Blogs/Blog";

const Home = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	return (
		<div className="col-span-2 px-4">
			{
                blogs.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
            }
		</div>
	);
};

export default Home;
