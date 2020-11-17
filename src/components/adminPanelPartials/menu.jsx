import React from "react";

//icons from material UI
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

//Tree menu component
import TreeMenu from 'react-simple-tree-menu';

//Custom components
import ModalForm from "./modal";
import NewCategoryForm from "./newCatForm"
// import CategoriesDataTemp from "../assets/tempData";
import TempData from "./assets/tempData";



function Menu() {
	return (
		<nav className="col-md-2 d-none d-md-block bg-light sidebar">
		  <div className="sidebar-sticky">
		  	<div className="col">
				<h2>МЕНЮ</h2>
				<hr />




{/*
//Rendering list styled with bootstrap

				<ul className="nav flex-column mb-5 menu-level-1 align-items-start">
			  <li className="nav-item">
				<a className="nav-link active" href="#">
				  <span data-feather="home"></span>
				  Пункт 1 <span className="sr-only">(current)</span>
				</a>
			  </li>
			  <ul className="nav flex-column menu-level-3 ml-4 align-items-start">
			  	<li className="nav-item">
			  	  <a className="nav-link active" href="#">
			  		<span data-feather="home"></span>
			  		Пункт 1 <span className="sr-only">(current)</span>
			  	  </a>
			  	</li>
			  </ul>
			</ul>
*/}

			<TreeMenu data={TempData} />

			<div class="d-flex">
				<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted">Управление разделами:</h6>
				<span class="d-flex">
					 <ModalForm icon={"add"} title={"Добавить новую категорию"}>
						<NewCategoryForm />
					 </ModalForm>
					 <ModalForm icon={"edit"} title={"Редактирование категорий"}>
						<p>CATEGORY TREE HERE</p>
					 </ModalForm>
				</span>
			</div>

			<div className="d-flex flex-column align-items-center">
				<button className="btn btn-secondary col-md-9 mb-2 mt-2" type="submit">Список статей</button>
				<button className="btn btn-secondary col-md-9 mb-2 mt-2" type="submit">Редактировать разделы</button>
			</div>
			<div class="dropdown-menu">
				<a class="dropdown-item" href="#">Action</a>
				<a class="dropdown-item" href="#">Another action</a>
				<a class="dropdown-item" href="#">Something else here</a>
				<div class="dropdown-divider"></div>
			</div>


			</div>
		  </div>
		</nav>
	)
}

export default Menu;
