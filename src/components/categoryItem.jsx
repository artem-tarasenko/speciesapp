import React from "react";
import { Link } from "react-router-dom";
import Url from "./Url.jsx";

export default function CategoryItem(props) {
	//props  ###  category: as a source of data  ###   url - complex string for Router Link

	let link; 

	if (!props.category.cover) {
		link = `${Url}/uploads/noimage.png`;
	} else {
		link = Url + props.category.cover.url;
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
