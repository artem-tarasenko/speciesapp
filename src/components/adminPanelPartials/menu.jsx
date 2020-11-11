import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

function Menu() {
	return (
		<nav className="col-md-2 d-none d-md-block bg-light sidebar">
		  <div className="sidebar-sticky">
		  	<div className="col">
			  <h2>МЕНЮ</h2>
		  	<form className="form-inline search d-flex">
			  <input className="form-control col-md-8" type="search" placeholder="Search" aria-label="Search" />
			  <div class="btn-group btn-group-toggle col-md-3" data-toggle="buttons">
			  	<button className="btn btn-outline-secondary my-2 my-sm-0" type="submit"><SearchIcon /></button>
				<button className="btn btn-outline-secondary my-2 my-sm-0" type="submit"><ClearIcon /></button>
			  </div>
			</form>
			<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
			  <span>СПИСОК РАЗДЕЛОВ</span>
			</h6>
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
			</div>
		  </div>
		</nav>
	)
}

export default Menu;
