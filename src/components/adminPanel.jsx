import React from "react";
import Menu from "./adminPanelPartials/menu";
import Body from "./adminPanelPartials/body";


function AdminPanel() {
	return (
		<React.Fragment>

			<div class="container-fluid">
			     <div class="row">
					<Menu />
					<Body />
				</div>
			</div>
		</React.Fragment>
	)
}

export default AdminPanel;
