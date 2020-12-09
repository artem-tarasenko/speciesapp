import React, { useState } from "react";
import {CategoriesDB, ArticlesDB} from "./testdata";

import {Switch, Route, Link} from "react-router-dom";

import Home from "./Home";


const Breadcrumbs = () => <Route path="*" render={props => {
    let parts = props.location.pathname.split("/"); //get all ID's from the path
    const place = parts[parts.length-1]; // save last one
	parts = parts.slice(1, parts.length-1); //remove the last one from the array
    let lastCrumsItem; //variable for link label
    //test if last ID in the path starts with "a" or not. If yes, then its an article
    //with ID like "a2" and it should be found in ArticlesDB
    //If not - ID is a number which means it's a category and could be found in Cat's DB
    place.startsWith("a") && searchForItem(ArticlesDB);
    !(place.startsWith("a")) && searchForItem(CategoriesDB);
    
    function searchForItem(source) {
        lastCrumsItem = source.find( item => item.id == place)
    }

    return (
			<div className="nav-menu d-flex flex-column">
				<div className="container">
					<p><Link to="/" >ROOT</Link></p>
					{parts.map(crumb)}
					<p className="active link">{lastCrumsItem && lastCrumsItem.title}</p>
				</div>
			</div>
		)
	}}
/>

const crumb = (part, partIndex, parts) => {
    const path = ['', ...parts.slice(0, partIndex+1)].join("/");
    let partName = "Unnamed link";
    let sourceDB = CategoriesDB;

    // console.group("conditions and result");
    if (CategoriesDB.find(item => item.id == part).hasOwnProperty("subcategories")) {
        // console.log("this one is with subcats!");
        //get name in 1 source
    } else if (CategoriesDB.find(item => item.id == part).hasOwnProperty("articles")) {
        // console.log("this one with articles!");
        //get name in 1 source
    } else if (CategoriesDB.find(item => item.id == part).hasOwnProperty("description")) {
        // console.log("this one with just a description!");
        sourceDB = ArticlesDB;
        //get name in 1 source
    }
    // console.groupEnd();

    //look for a title
    partName = sourceDB.find(item => item.id == part).title;

    return <p>
        <Link key={path} to={path} >{partName}</Link>
        </p>
}


//============================================================================
//===========================   RENDER CONTENT  ==============================
// This function gets props from calling, normally parent ID and router match
// With this data it return 3 different types of content based on what properties
//parent category has: articles, subcategories or description
//Used to render 2 and 3 levels of categories tree
//============================================================================
function ConditionalContentRender(props) {
    let parent = props.parent;
    let match = props.match;

    if (parent.hasOwnProperty("subcategories")) {
        console.log("ConditionalContentRender(): rendering subcategories...");
        return (
            <>
                {match.isExact && (
                    <>
						<section className="container">
                        <h3>{parent.title}</h3>
                        <hr />
                        <p>parent found, id is {parent.id}</p>
                        {parent.subcategories.map(subCategoryId => {
                            return (
                            <div>
                                <Link key={subCategoryId} to={`${match.url}/${subCategoryId}`}>
                                {CategoriesDB.find(cat => cat.id === subCategoryId).title} ***
                                </Link>
                            </div>
                            );
                        })}
						</section>
                    </>
                )}
                <Switch>
                    <Route path={`${match.path}/:subcategory`} component={Subcategory} />
                </Switch>
            </>
        )
    } else if (parent.hasOwnProperty("articles")) {
        // console.log("ConditionalContentRender(): rendering articles...");
        return (
            <>
				{match.isExact && (
					<>
						<section className="container">
                        <h3>{parent.title}</h3>
                        <hr />
                        <p>parent found, id is {parent.id}</p>
                        {parent.articles.map(articleId => {
                            return (
                            <div>
                                <Link key={articleId} to={`${match.url}/${articleId}`}>
                                    {ArticlesDB.find(art => art.id == articleId).title} ---- *#*
                                </Link>
                            </div>
                            );
                        })}
						</section>
					</>
				)}
                <Switch>
                    <Route path={`${match.path}/:article`} component={Article} />
                </Switch>

            </>
        )
    } else if (parent.hasOwnProperty("description")) {
        // console.log("ConditionalContentRender(): rendering description...");
        let descArticle;
        let idSubtracted = parent.description[0].split("a");
		if (idSubtracted[1] <= ArticlesDB.length) {
            descArticle = ArticlesDB.find( item => item.id == parent.description);
	        return (
				<>
					<section className="container">
	                    <h3>{descArticle.title}</h3>
	                    <hr />
	                    <p>Some text here from {descArticle.title}</p>
	                    <p>{descArticle.subtitle}</p>
						<p>{descArticle.content}</p>
					</section>
				</>
			)
		} else {
			console.log("Parent category does not have any description, or article does not found");
			return (
				<>
					<h3>Something went wrong!</h3>
					<hr />
					<p>Parent category does not have any description, or article does not found</p>
				</>
			)
		}

    } else {
        console.log("Something wrong with testing parent category");
    }
}


//============================================================================
//=========================   RENDER LEVEL 4 PAGE  ===========================
//============================  SINGLE ARTICLE  ==============================
function Article({match}) {
    //getting what needs to be rendered
    const article = ArticlesDB.find( art => match.params.article == art.id );

    return (
        <>
            {match.isExact && (
                <>
					<section className="container">
	                    <h2>{article.title}</h2>
						<h5>{article.subtitle}</h5>
						<hr />
	                    <p>{article.content}</p>
					</section>
                </>
            )}
        </>
    )
}

//============================================================================
//=========================   RENDER LEVEL 3 PAGE  ===========================
//===============================  ARTICLES  =================================
function Subcategory({match}) {
    //getting what needs to be rendered
    const subcategory = CategoriesDB.find( category => parseInt(match.params.subcategory) === category.id );

    //---------------------------------------------------------------

    return (
        <>
        	<ConditionalContentRender parent={subcategory} match={match} />
        </>
    )
}

//============================================================================
//=========================   RENDER LEVEL 2 PAGE  ===========================
//=============================  SUBCATEGORIES  ==============================
function Category({match}) {
    //getting what needs to be rendered
    const category = CategoriesDB.find( category => parseInt(match.params.category) === category.id );

    return (
        <>
            <ConditionalContentRender parent={category} match={match} />
        </>
    )
}



//============================================================================
//============================   BASIC ROUTING  ==============================
//============================================================================
function TestRouting() {
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

export default TestRouting;
