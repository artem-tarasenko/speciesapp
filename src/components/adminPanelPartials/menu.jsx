import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ModalForm from "./modal"

function Menu() {
	return (
		<nav className="col-md-2 d-none d-md-block bg-light sidebar">
		  <div className="sidebar-sticky">
		  	<div className="col">
			  <h2>МЕНЮ</h2>
			  <hr />
		  	<form className="form-inline search d-flex">
			  <input className="form-control col-md-8" type="search" placeholder="Поиск" aria-label="Search" />
			  <div class="btn-group btn-group-toggle col-md-3" data-toggle="buttons">
			  	<div class="btn-group">
			  		<button className="btn btn-outline-secondary my-2 my-sm-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<SearchIcon />
					</button>
					<button className="btn btn-outline-secondary my-2 my-sm-0" type="submit"><ClearIcon /></button>
				</div>
			  </div>
			</form>
			<hr />
			<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted">Управление разделами:</h6>
			<div class="d-flex">
			<form className="form-inline search d-flex">
			  <input className="form-control col search-min" type="search" placeholder="Поиск #2" aria-label="Search" />
			</form>
			<span class="d-flex">
				 <ModalForm icon={"add"} title={"Добавить новую категорию"}>
					<form>
						<div class="form-group">
							<label for="categoryTitle">Заголовок категории</label>
							<input type="text" class="form-control" id="categoryTitle" placeholder="Заголовок..." />
						</div>
						<div class="form-group">
							<label for="categorySubtitle">Подзаголовок категории</label>
							<input type="text" class="form-control" id="categorySubtitle" placeholder="Латынь..." />
						</div>
						<div class="form-group">
							<label for="categoryParent">Выберете родителя</label>
							<select class="form-control" id="categoryParent">
								<option>Категория 1</option>
								<option>Категория 1.2</option>
								<option>Категория 2</option>
								<option>Категория 2.1</option>
								<option>Категория 2.2</option>
							</select>
						</div>
					</form>
				 </ModalForm>
				 <ModalForm icon={"edit"} title={"Редактирование категорий"}>
				 	<p>CATEGORY TREE HERE</p>



				 </ModalForm>
			</span>
			</div>
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
			  	<li className="nav-item">
			  	  <a className="nav-link" href="#">
			  		<span data-feather="file"></span>
			  		Пункт 2
			  	  </a>
			  	</li>
			  </ul>
			  <li className="nav-item">
				<a className="nav-link" href="#">
				  <span data-feather="shopping-cart"></span>
				  Пункт 3
				</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#">
				  <span data-feather="users"></span>
				  Пункт 4
				</a>
			  </li>
			  <ul className="nav flex-column mb-5 menu-level-2 ml-4 align-items-start">
	  			  <li className="nav-item">
	  				<a className="nav-link active" href="#">
	  				  <span data-feather="home"></span>
	  				  Пункт 1 <span className="sr-only">(current)</span>
	  				</a>
	  			  </li>
	  			  <li className="nav-item">
	  				<a className="nav-link" href="#">
	  				  <span data-feather="file"></span>
	  				  Пункт 2
	  				</a>
	  			  </li>
				  <ul className="nav flex-column menu-level-3 ml-4 align-items-start">
		  			  <li className="nav-item">
		  				<a className="nav-link active" href="#">
		  				  <span data-feather="home"></span>
		  				  Пункт 1 <span className="sr-only">(current)</span>
		  				</a>
		  			  </li>
		  			  <li className="nav-item">
		  				<a className="nav-link" href="#">
		  				  <span data-feather="file"></span>
		  				  Пункт 2
		  				</a>
		  			  </li>
		  			  <li className="nav-item">
		  				<a className="nav-link" href="#">
		  				  <span data-feather="shopping-cart"></span>
		  				  Пункт 3
		  				</a>
		  			  </li>
		  			  <li className="nav-item">
		  				<a className="nav-link" href="#">
		  				  <span data-feather="users"></span>
		  				  Пункт 4
		  				</a>
		  			  </li>
	  				</ul>
	  			  <li className="nav-item">
	  				<a className="nav-link" href="#">
	  				  <span data-feather="users"></span>
	  				  Пункт 4
	  				</a>
	  			  </li>
  			</ul>
			</ul>
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
