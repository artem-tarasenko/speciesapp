import React from "react";
import Fab from "@material-ui/core/Fab";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function SingleArticle(props) {

	function changeListState() {
			console.log("Article module passed");
			props.handleClick(true);
	}

	return <li href="#" className="list-group-item d-flex justify-content-between" onClick={changeListState}>
				<a href="#" className="align-self-center">{props.title}</a>
				<span className="article-list-fab">
					<button type="button" className="btn btn-sm btn-outline-secondary mr-2">Удалить</button>
					{/* <a href="#" className="badge badge-danger">X</a> */}
					<Fab color="inherit">
						<DeleteOutlineIcon />
					</Fab>
				</span>
			</li>
}
