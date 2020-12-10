import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem(props) {
	//props: itemTitle
    return (
        <React.Fragment>
			<div className="category">
				<Link to={props.url}>
					<div className="image">
						<img src="/images/category.jpg" />
					</div>
					<div className="label">
						<p>{props.category.title}</p>
					</div>
				</Link>
			</div>
		</React.Fragment>
    );
}