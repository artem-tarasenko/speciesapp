import React, { useState } from "react";
import {CategoriesDB, ArticlesDB} from "./testdata";

import {
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";


const Breadcrumbs = () => <Route path="*" render={props => {
    let parts = props.location.pathname.split("/"); //get all ID's from the path
    const place = parts[parts.length-1]; // save last one

//==============================================================


	parts = parts.slice(1, parts.length-1); //remove the last one from the array

	console.log("========= Breadcrums ========");
	// console.log("Place var ->");
	// console.log(place);
	// console.log("Parts array ->");
	// console.log(parts);

	let pathObject = [{link: "/", name: "RooT"}];
	let lastCrumsItem;

	//somewhere here I need to make an array of objects that containt proper names for ID's whether ID is cat or articles
	if (parts.length > 0 || place > 0) {
		console.log("parts exist");
		if (parts.length < 1) {
			//starting with PLACE variable
			lastCrumsItem = CategoriesDB.find( item => item.id == place);
		} else {
			//must declare lastCrumsItem after first ID
		}









	} else {
		console.log("parts EMPTY");
	}



//==============================================================



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
        return <p><Link key={path} to={path} >{part}</Link></p>}


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
                                    {ArticlesDB.find(art => art.id === articleId).title} ---- *#*
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
		if (parent.description <= ArticlesDB.length) {
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
    const article = ArticlesDB.find( art => parseInt(match.params.article) === art.id );

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
//=========================   RENDER LEVEL 1 PAGE  ===========================
//==============================  CATEGORIES  ================================
function Home({match}) {
    const rootCategory = CategoriesDB.find(item => item.id == 0);
    let rootCategories = rootCategory.subcategories.map(subcatID => CategoriesDB.find(item => item.id == subcatID));

    return (
        <>
            <section className="container">
                <h3>{rootCategory.title}</h3>
                <hr />
                {rootCategories.map(subCat => {
                    return (
                    <div key={subCat.id}>
                        <Link to={`${subCat.id}`}>
                            {CategoriesDB.find(cat => cat.id === subCat.id).title} ***
                        </Link>
                    </div>
                    );
                })}
            </section>
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
