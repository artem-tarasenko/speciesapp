import React from "react";
import {Cats, SubcatsDB, ArticlesDB} from "./testdata"; //temporary DB
//router
import {
  Link,
  NavLink,
} from "react-router-dom";

//=============================================================================
//=============================================================================

function Menu(props) {
	//props: parentID; type(articles, categories, description)
    let item, parent, link, title;

    if (props.type === "description") {
        //the whole article to parse
        item = ArticlesDB.find(item => item.parent === props.parentID);
        parent = Cats.find(item => item.id === props.parentID);
        link = parent.id;
        title = item.title;

    } else if (props.type === "categories" || props.type === "articles") {
        //only parent category to parse title for menu
        item = Cats.find(item => item.id === props.parentID);
        link = item.id;
        title = item.title;

    } else {
        item = "UNDEFINED";
    }

    return (
        <React.Fragment>
            <nav className="sidebar container d-flex flex-column">
                <Link to="/">HOME</Link>
                <NavLink to={link} activeClassName="active">{title}</NavLink>
            </nav>
        </React.Fragment>
    )
}

export default Menu;
