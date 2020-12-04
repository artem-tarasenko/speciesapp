import React, { useState } from "react";

import {Cats, SubcatsDB, ArticlesDB} from "./testdata"; //temporary DB
//router
import {
  Link,
  NavLink,
} from "react-router-dom";

//=============================================================================
//=============================================================================
//hook should be in mainRoutin, menu rendered based on hook state with passing all
//params, udpating state also from main routing.
function MenuHook(props) {
	//props = parentID
	let [ path, setPath ] = useState({
		homePath: "/",
		homeName: "HOME",
		catPath: "",
		catName: "",
		subcatPath: "",
		subcatName: "",
		itemPath: "",
		itemName: ""
	});


	function updateMenu() {
		setPath( (prevState) => {
			return {
			...prevState,
			catPath: "3",
			catName: "Subcat id 3"
			}
		})
		console.log(path);
	}



	//props: parentID; type(articles, categories, description)
    let item, parent, link, title;

    //only parent category to parse title for menu
    item = Cats.find(item => item.id === props.parentID);
    link = item.id;
    title = item.title;



    return (
        <React.Fragment>
            <nav className="sidebar container d-flex flex-column">
                <Link to="/">HOME</Link>
                <NavLink to={link} activeClassName="active">{title}</NavLink>
            </nav>
        </React.Fragment>
    )
}

export default MenuHook;
