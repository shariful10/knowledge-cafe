import React from "react";

const Header = () => {
	return (
		<div className="container mx-auto py-5">
			<div className="navbar bg-base-100 mb-5">
				<div className="navbar-start">
					<h3 className="font-bold text-3xl">Knowledge Cafe</h3>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a
								className="font-medium hover:bg-white"
								href="/home">
								Home
							</a>
						</li>
						<li className="font-medium hover:bg-white">
							<a href="/about">About</a>
						</li>
						<li>
							<a
								className="font-medium hover:bg-white"
								href="/contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<img
						className="rounded-[50%] w-12 h-12"
						src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?w=1380&t=st=1680198427~exp=1680199027~hmac=3fc0c273807fd50ff1511f49cc92e3ac77049cf6be1e59506b396a0870d4f99d"
					/>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default Header;
