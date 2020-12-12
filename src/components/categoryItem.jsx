import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem(props) {
	//props  ###  category: as a source of data  ###   url - complex string for Router Link
	// console.log(props.category);

	let link

	if (!props.category.cover) {
		link = "http://localhost:1337/uploads/noimage.png";
	} else {
		link = "http://localhost:1337" + props.category.cover.url;
	}

    return (
        <React.Fragment>
			<div className="category">
				<Link to={props.url}>
					<div className="image">
						<img src={link} />
					</div>
					<div className="label d-flex flex-row justify-content-between">
						<p>{props.category.title}</p>
						{props.category.number && <span>{props.category.number}</span>}
					</div>
				</Link>
			</div>
		</React.Fragment>
    );
}
