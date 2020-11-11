import React from "react";


function Menu() {
	return (
		<nav class="col-md-2 d-none d-md-block bg-light sidebar">
		  <div class="sidebar-sticky">
		  	<h2>МЕНЮ</h2>
		  	<form class="form-inline">
			  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
			  <button class="btn btn-outline-success my-2 my-sm-0" type="submit"></button>
			</form>
			<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
			  <span>СПИСОК РАЗДЕЛОВ</span>
			</h6>
			<ul class="nav flex-column mb-5 menu-level-1 align-items-start">
			  <li class="nav-item">
				<a class="nav-link active" href="#">
				  <span data-feather="home"></span>
				  Пункт 1 <span class="sr-only">(current)</span>
				</a>
			  </li>
			  <ul class="nav flex-column menu-level-3 ml-4 align-items-start">
			  	<li class="nav-item">
			  	  <a class="nav-link active" href="#">
			  		<span data-feather="home"></span>
			  		Пункт 1 <span class="sr-only">(current)</span>
			  	  </a>
			  	</li>
			  	<li class="nav-item">
			  	  <a class="nav-link" href="#">
			  		<span data-feather="file"></span>
			  		Пункт 2
			  	  </a>
			  	</li>
			  </ul>
			  <li class="nav-item">
				<a class="nav-link" href="#">
				  <span data-feather="shopping-cart"></span>
				  Пункт 3
				</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">
				  <span data-feather="users"></span>
				  Пункт 4
				</a>
			  </li>
			  <ul class="nav flex-column mb-5 menu-level-2 ml-4 align-items-start">
	  			  <li class="nav-item">
	  				<a class="nav-link active" href="#">
	  				  <span data-feather="home"></span>
	  				  Пункт 1 <span class="sr-only">(current)</span>
	  				</a>
	  			  </li>
	  			  <li class="nav-item">
	  				<a class="nav-link" href="#">
	  				  <span data-feather="file"></span>
	  				  Пункт 2
	  				</a>
	  			  </li>
				  <ul class="nav flex-column menu-level-3 ml-4 align-items-start">
		  			  <li class="nav-item">
		  				<a class="nav-link active" href="#">
		  				  <span data-feather="home"></span>
		  				  Пункт 1 <span class="sr-only">(current)</span>
		  				</a>
		  			  </li>
		  			  <li class="nav-item">
		  				<a class="nav-link" href="#">
		  				  <span data-feather="file"></span>
		  				  Пункт 2
		  				</a>
		  			  </li>
		  			  <li class="nav-item">
		  				<a class="nav-link" href="#">
		  				  <span data-feather="shopping-cart"></span>
		  				  Пункт 3
		  				</a>
		  			  </li>
		  			  <li class="nav-item">
		  				<a class="nav-link" href="#">
		  				  <span data-feather="users"></span>
		  				  Пункт 4
		  				</a>
		  			  </li>
	  				</ul>
	  			  <li class="nav-item">
	  				<a class="nav-link" href="#">
	  				  <span data-feather="users"></span>
	  				  Пункт 4
	  				</a>
	  			  </li>
  			</ul>
			</ul>
			<div class="d-flex flex-column align-items-center">
				<button class="btn btn-secondary col-md-9 mb-2 mt-2" type="submit">Список статей</button>
				<button class="btn btn-secondary col-md-9 mb-2 mt-2" type="submit">Редактировать разделы</button>
			</div>
		  </div>
		</nav>
	)
}

export default Menu;
