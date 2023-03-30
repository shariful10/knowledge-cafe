import React from "react";

const Header = () => {
	return (
		<div className="container mx-auto">
			<div class="navbar bg-base-100">
				<div class="navbar-start">
					<h3 class="font-semibold text-3xl">Knowledge Cafe</h3>
				</div>
				<div class="navbar-center hidden lg:flex">
					<ul class="menu menu-horizontal px-1">
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
				<div class="navbar-end">
					<img src="../../../public/img/header-img.png" />
				</div>
			</div>
            <hr />
		</div>
	);
};

export default Header;
