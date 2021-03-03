import React, { useState, useEffect } from "react";
import {Switch, Route, Link} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import Home from "./Home";
import RenderSingleArticle from "./RenderSingleArticle";
import ConditionalContentRender from "./ConditionalContentRender";
import Url from "./Url.jsx";


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
    let data = useFetch(Url + "/" + table);

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
            //--------------------

            if (props.location.pathname === "/") {
                return
            }

            lastCrumsItem = data.find( item => item.id === place);
            if (!lastCrumsItem) {
                let tempPlace = data.find( item => item.id == parts[parts.length-1]);
                lastCrumsItem = tempPlace.articles.find( item => item.id === place);
            }

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
