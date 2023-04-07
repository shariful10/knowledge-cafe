import React from "react";

const Bookmark = (props) => {
    const {b} = props;

	return (
		<>
			<h4 className="font-semibold text-[16px] md:text-[18px] p-[20px] bg-white rounded-lg my-4">
				{b.title}
			</h4>
		</>
	);
};

export default Bookmark;
