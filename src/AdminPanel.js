import React from "react";
import './App.css';
import './components/assets/css/dashboard.css';
import './components/assets/css/appStyles.css';
import "./components/assets/css/form-validation.css";
// import "./components/assets/css/treemenu.css";
import Body from "./components/adminPanelPartials/body";
import AdminFooter from "./components/adminPanelPartials/adminFooter";
import AdminHeader from "./components/adminPanelPartials/adminHeader";
import AddArticle from "./components/adminPanelPartials/addArticle";
import ArticlesList from "./components/adminPanelPartials/articlesList";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export default function AdminPanel() {
  return (
	<React.Fragment>


		<Router>
			<div className="container-fluid bg-secondary">
				<div className="col-xl-9 m-auto d-flex navbar">
					<a class="navbar-brand" href="#">SPECIES BASE APP</a>
					<div className="navbar navbar-expand-lg navbar-dark">
						<ul className="navbar-nav">
						  <li className="nav-item">
							<Link className="nav-link" to="/">Дерево статей</Link>
						  </li>
						  <li className="nav-item">
							<Link className="nav-link" to="/add">Добавить статью</Link>
						  </li>
						  <li className="nav-item">
							<Link className="nav-link" to="/list">Все статьи</Link>
						  </li>
						</ul>

					</div>
				</div>
			</div>

			<Switch>
				<Route path="/add">
					<Add />
				</Route>
				<Route path="/list">
					<List />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>

			<AdminFooter />
		</Router>
	</React.Fragment>
  );
}

function Home() {
	return (
		<React.Fragment>
		<div className="col-xl-9 d-flex body-wrapper">
			<Body />
			<div class='push'></div>
		</div>
		</React.Fragment>
	)
}

function Add() {
  return (
	  <React.Fragment>
	  	<div className="col-xl-9 d-flex body-wrapper">
			<AddArticle />
			<div class='push'></div>
		</div>
	  </React.Fragment>
  )
}

function List() {
  return (
	<React.Fragment>
		<div className="col-xl-9 offset-xl-3 mt-5 mb-5 body-wrapper">
		  	<ArticlesList />
			<div class='push'></div>
		</div>

	</React.Fragment>
  )
}
