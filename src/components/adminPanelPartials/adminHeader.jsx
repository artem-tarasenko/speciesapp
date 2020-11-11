import React from "react";

function AdminHeader() {
	return (
		<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
		  <h1 class="h2">Видовое дерево</h1>
		  <div class="btn-toolbar mb-2 mb-md-0">
			<div class="btn-group mr-2">
			  <button class="btn btn-sm btn-outline-secondary">Кнопка 1</button>
			  <button class="btn btn-sm btn-outline-secondary">Кнопка 1</button>
			</div>
			<button class="btn btn-sm btn-outline-secondary dropdown-toggle">
			  <span data-feather="calendar"></span>
			  Кнопка 3
			</button>
		  </div>
		</div>
	)
}

export default AdminHeader;
