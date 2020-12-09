import React from "react";

export default function CategoryItem(props) {
	//props: itemTitle
    return (
        <React.Fragment>
			<div className="category">
				<div className="image">
					<img src="/images/category.jpg" />
				</div>
				<div className="label">
					<p>{props.itemTitle}</p>
				</div>
			</div>
		</React.Fragment>
    );
}