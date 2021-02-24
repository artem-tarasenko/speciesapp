import React, { useState, useEffect } from "react";

import {Switch, Route, Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Home from "./Home";
import RenderSingleArticle from "./RenderSingleArticle";
import ConditionalContentRender from "./ConditionalContentRender";


const useFetch = url => {
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {fetchData()}, [url]);

    return data;
}



function Breadcrumbs() {
    let table = "categories";
    let data = useFetch("http://localhost:1337/" + table);

	if (!data) {
		return <section className="container"><div className="loader"><CircularProgress /></div></section>
	} else {

        return <Route path="*" render={props => {
            let parts = props.location.pathname.split("/"); //get all ID's from the path
            const place = parts[parts.length-1]; // save last one
            parts = parts.slice(1, parts.length-1); //remove the last one from the array
            let lastCrumsItem; //variable for link label
            //test if last ID in the path starts with "a" or not. If yes, then its an article
            //with ID like "a2" and it should be found in ArticlesDB
            //If not - ID is a number which means it's a category and could be found in Cat's DB

            // place.startsWith("a") && searchForItem(ArticlesDB);
            // !(place.startsWith("a")) && searchForItem(CategoriesDB);

            // function searchForItem(source) {
            //     lastCrumsItem = source.find( item => item.id == place)
            // }

            //--------------------
            if (props.location.pathname === "/") {
                return
            }

            lastCrumsItem = data.find( item => item.id === place);
            if (!lastCrumsItem) {
                let tempPlace = data.find( item => item.id == parts[parts.length-1]);
                lastCrumsItem = tempPlace.articles.find( item => item.id === place);
            }


            // console.group("Breadbrubms pieces");
            // console.log("place - ID of current item");
            // console.log(place);
            // console.log("lastCrumsItem - that should contain NAME of current element");
            // console.log(lastCrumsItem);
            // console.log("props.location.pathname - full path from Router");
            // console.log(props.location.pathname);
            // console.log("parts array - should have ID's from pathname after slicing empty ones");
            // console.log(parts);
            // console.log("API data from Strapi recieved for Router (categories array)");
            // console.log(data);
            // console.groupEnd();

            //--------------------

            return (
                    <nav className="nav-menu d-flex flex-column">
                        <div className="container">
                            <p><Link to="/" >ГЛАВНАЯ</Link></p>
                            {parts.map(Crumb)}
                            <p className="active link">{lastCrumsItem && lastCrumsItem.title}</p>
                        </div>
                    </nav>
                )
            }}

        />
    }

function Crumb(part, partIndex, parts) {
    const path = ['', ...parts.slice(0, partIndex+1)].join("/");

    let partName = "Unnamed link";


    // console.group("conditions and result");
    // if (sourceDB.find(item => item.id == part).hasOwnProperty("subcategories")) {
    //     // console.log("this one is with subcats!");
    //     //get name in 1 source
    // } else if (sourceDB.find(item => item.id == part).hasOwnProperty("articles")) {
    //     // console.log("this one with articles!");
    //     //get name in 1 source
    // } else if (sourceDB.find(item => item.id == part).hasOwnProperty("description")) {
    //     // console.log("this one with just a description!");
    //     //sourceDB = data;
    //     //get name in 1 source
    // }
    // console.groupEnd();

    //look for a title
    //partName = sourceDB.find(item => item.id == part).title;

    let linkName = data.find( item => item.id === part).title;
    return <p key={path}><Link to={path} >{linkName}</Link></p>
}
}


//============================================================================
//===========================   RENDER CONTENT  ==============================
// This function gets props from calling, normally parent ID and router match
// With this data it return 3 different types of content based on what properties
//parent category has: articles, subcategories or description
//Used to render 2 and 3 levels of categories tree
//============================================================================



//============================================================================
//=========================   RENDER LEVEL 4 PAGE  ===========================
//============================  SINGLE ARTICLE  ==============================
function Article({match}) {
    return (
        <>
            {match.isExact && (
				<RenderSingleArticle match={match} gallery={true} />
            )}
        </>
    )
}

//============================================================================
//=========================   RENDER LEVEL 3 PAGE  ===========================
//===============================  ARTICLES  =================================
function Subcategory({match}) {
    return <ConditionalContentRender type={"categories"} match={match} />
}

//============================================================================
//=========================   RENDER LEVEL 2 PAGE  ===========================
//=============================  SUBCATEGORIES  ==============================
function Category({match}) {
    return <ConditionalContentRender type={"categories"} match={match} />
}


//============================================================================
//============================   BASIC ROUTING  ==============================
//============================================================================
function ContentRouting() {
    return (
        <><div className="main d-flex flex-row">
		<Breadcrumbs />
	    <Switch>
            <Route exact path={`/`} component={Home} />
			<Route path={`/:category`} component={Category} />
        </Switch>
		</div>
        </>
    )
}

export {ContentRouting, Subcategory, Article};
