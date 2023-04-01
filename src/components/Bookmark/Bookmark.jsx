import React from "react";

const Bookmark = (props) => {
    const {bookmark} = props;
	return (
		<div>
			<h3 className="text-[18px] md:text-2xl font-bold">
				Bookmarked Blogs : {bookmark.length}
			</h3>
			<h4 className="font-semibold text-[16px] md:text-[18px] p-[20px] bg-white rounded-lg my-4">
				How to get your first job as a self-taught programmer
			</h4>
		</div>
	);
};

export default Bookmark;
