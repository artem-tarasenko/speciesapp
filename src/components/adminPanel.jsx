import React from "react";
import Menu from "./adminPanelPartials/menu";
import AddArticle from "./adminPanelPartials/addArticle";
import ArticlesList from "./adminPanelPartials/articlesList";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";




function AdminPanel() {
	return (
		<React.Fragment>
		<Router>
			<div className="container-fluid">
			     <div className="row">
				 	<div className="col-md-2 d-md-block bg-light sidebar">

						<ul>
						  <li>
							<Link to="/">Дерево статей</Link>
						  </li>
						  <li>
							<Link to="/add">Добавить статью</Link>
						  </li>
						  <li>
							<Link to="/list">Все статьи</Link>
						  </li>
						</ul>
						<Menu />
					</div>
					<div className="col-md-10 offset-md-2 container-fluid">
					<Switch>
						<Route path="/add">
							<Add />
						</Route>
						<Route path="/list">
							<List />
						</Route>
						<Route path="/">
							<Tree />
						</Route>
					</Switch>
					</div>
				</div>
			</div>
		</Router>
		</React.Fragment>
	)
}

function Tree() {
  return (
	  <React.Fragment>

			  <h2>Дерево статей</h2>


	  </React.Fragment>
  )
}

function Add() {
  return (
	  <React.Fragment>
	  	<AddArticle />
	  </React.Fragment>
  )
}

function List() {
  return (
	  <React.Fragment>
	  	<ArticlesList />
	  </React.Fragment>
  )
}

export default AdminPanel;
