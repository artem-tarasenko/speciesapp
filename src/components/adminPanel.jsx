import React from "react";
import Menu from "./adminPanelPartials/menu";
import Body from "./adminPanelPartials/body";
import ArticlesList from "./adminPanelPartials/articlesList";


function AdminPanel() {
	return (
		<React.Fragment>

			<div className="container-fluid">
			     <div className="row">
				 	<Menu />
				</div>
			</div>
		</React.Fragment>
	)
}

export default AdminPanel;
