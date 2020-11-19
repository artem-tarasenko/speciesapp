import React from "react";
import AdminPanel from "./adminPanel";
import ArticlesList from "./articlesList";

function Body() {
	return (
		<React.Fragment>
			<div className="row mt-5">
			<AdminPanel />
			<ArticlesList />
			</div>
			
		</React.Fragment>
	)
}

export default Body;
