import React from "react";
import AdminHeader from "./adminHeader";
import Footer from "./footer";
import Fab from "@material-ui/core/Fab";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function ArticlesList() {

    function submitNote(){

    }

	return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <div className="container-fluid">
            <div className="d-flex flex-column align-items-start col-md-10">
                <h3>Список всех статей</h3>
                <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                <hr />
                <nav className="navbar navbar-light bg-secondary col-md-12">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
                    </form>
                </nav>
                <div className="list-group-flush col-md-12">
                    <li href="#" className="list-group-item d-flex justify-content-between">
                        <a href="#" className="align-self-center">Caras justo odio</a>
                        <span className="article-list-fab">
                            <button type="button" className="btn btn-sm btn-outline-secondary mr-2">Удалить</button>
                            {/* <a href="#" className="badge badge-danger">X</a> */}
                            <Fab color="inherit" onClick={submitNote}>
                                <DeleteOutlineIcon />
                            </Fab>
                        </span>
                    </li>
                    <li href="#" className="list-group-item  d-flex justify-content-between">
                        <a href="#" className="align-self-center">Caras justo odio</a>
                        <span className="article-list-fab">
                            <button type="button" className="btn btn-sm btn-outline-secondary mr-2">Удалить</button>
                            {/* <a href="#" className="badge badge-danger">X</a> */}
                            <Fab color="inherit" onClick={submitNote}>
                                <DeleteOutlineIcon />
                            </Fab>
                        </span>
                    </li>
                </div>
            </div>
        </div>
        </main>
	)
}

export default ArticlesList;
