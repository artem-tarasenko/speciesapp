import React from "react";

function AdminHeader() {
	return (
		<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
		  <h1 className="h2">Видовое дерево</h1>
		  <div className="btn-toolbar mb-2 mb-md-0">
			<div className="btn-group mr-2">
			  <button className="btn btn-sm btn-outline-secondary">Кнопка 1</button>
			  <button className="btn btn-sm btn-outline-secondary">Кнопка 1</button>
			</div>
			<button className="btn btn-sm btn-outline-secondary dropdown-toggle">
			  <span data-feather="calendar"></span>
			  Кнопка 3
			</button>
		  </div>
		</div>
	)
}

export default AdminHeader;
