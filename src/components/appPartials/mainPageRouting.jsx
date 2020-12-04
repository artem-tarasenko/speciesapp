import React, { useState } from "react";
import CategoryItem from "./categoryItem";
import Menu from "./menu";
import MenuHook from "./menuHook";
import {Cats, SubcatsDB, ArticlesDB} from "./testdata";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";




function TempComponent(props) {
    return (
        <p>Some temp content</p>
    )
}

//###############################################################################
//###############################################################################
//######  DESCRIPTION  ##  This func can be moved to a separate file    #########
function ShowDescription(props) {
    //props: parentID
    let article = ArticlesDB.find(item => item.parent === props.parentID);

    if (article) {
        return (
                <section>
                    <h2>{article.title}</h2>
                    <h3>{article.subtitle}</h3>
                    <hr />
                    <p>{article.content}</p>
                </section>
        )
    } else {
        return (<h3>Error. Article not found!</h3>)
    }
};
//###############################################################################
function Articles(props) {
    let { path, url } = useRouteMatch();

    return (
        <React.Fragment>
            <section>
                <p>Parent Category ID is {props.parentID}</p>
                <p>Has to render list of articles from DB2</p>
                {/* <Link to={props.parent_id}{props.} >ARTICLE READ</Link> */}
            </section>
        </React.Fragment>
    )
}
//######  ARTICLES  ##  This func can be moved to a separate file    ############
function ShowArticles(props) {
    //props: parentID
    let article = ArticlesDB.find(item => item.parent === props.parentID);
    let { path, url } = useRouteMatch();
    console.log("PATH: " + path);
    console.log("URL: " + url);

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={path}>
                    <Articles
                        parentID={props.parentID}
                    />
                </Route>
                <Route path={`${path}/:subcat_id`}>
                    <TempComponent
                        routerUrl={path}
                    />
                </Route>
            </Switch>
        </React.Fragment>
    )
}

//###############################################################################
//######  SUBCATS  ##  This func can be moved to a separate file    #############


function ShowSubcategories(props) {
    //props: parentID
    let parentID = props.parentID; //the same as URL
    let { path, url } = useRouteMatch();
    //filter subcats base to collect only those that needed
    const filterdSubcats = SubcatsDB.filter( item => item.parent === props.parentID);
    // let subcat = props.match.params.subcat_id;

    function render(item) {
        return (
            <React.Fragment>
                <Router>
                    <Link to={`${url}/${item.id}`}>
                        <CategoryItem
                            key={item.id}
                            itemTitle={item.title}
                        />
					</Link>
                </Router>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>

                <Switch>
                    <Route exact path={path}>
                        <section>
                            <p>Parent Category ID is {props.parentID}</p>
                            <p>Has to render subcategories</p>
                                <div className="container d-flex justify-content-start flex-wrap">
                                    {
                                        filterdSubcats.map(render)
                                    }
                                </div>
                        </section>
                    </Route>
                    <Route path={`${path}/:subcat_id`}>

						<MenuHook parentID={parentID}/>
                        <TempComponent />

                    </Route>
                </Switch>
        </React.Fragment>
    )


}
// <Menu
// 	type="articles"
// 	parentID={parentID}
// />


//###############################################################################
//###############################################################################
//						ROUTES
//###############################################################################
//###############################################################################

//Conditional rendering of 1st level with menu, calling different components
//for 3 types of the page that are needed. All require different switches and routes
function renderLevel1(props) {
    //Get menu-1 ID (parent) from Router props (cat_id)
    let currentID = props.match.params.cat_id;
    //find object in the array
    let parentCategoryObj = Cats.find(item => item.id === currentID);

    //TESTING WHATS INSIDE AND RENDER ACCORDINGLY
    if (parentCategoryObj.hasArticle) { //if hasArticle - render 1 page article
        console.log("Rendering description to category");
        return (
            <React.Fragment>
                <main role="main" className="d-flex flex-direction-row flex-shring-0">
                    <Menu
                        type="description"
                        menuCategory
                        parentID={currentID}
                    />
                    <ShowDescription
                        parentID={currentID}
                    />
                </main>
            </React.Fragment>
        )
    }  else if (parentCategoryObj.hasItems) { //if hasItems - render article list
        console.log("Render article list in this category");
        return (
            <React.Fragment>
                <main role="main" className="d-flex flex-direction-row flex-shring-0">
                    <Menu
                        type="articles"
                        parentID={currentID}
                    />
                    <ShowArticles
                        parentID={currentID}
                    />
                </main>
            </React.Fragment>
        )
    } else if (parentCategoryObj.hasSubcategories) { //if hasSubcats - render subcats from BD2
        // console.log("Render subcatigories for this category");
        return (
            <React.Fragment>
                <main role="main" className="d-flex flex-direction-row flex-shring-0">
					<Menu
						type="categories"
						parentID={currentID}
					/>
                    <ShowSubcategories
                        parentID={currentID}
                    >

					</ShowSubcategories>
                </main>
            </React.Fragment>
        )
    }
}

//Function to render from array with map method
//can be updated to render different components (article or category)
//by checking (!item.content)
function renderItems(item) {
	//passed only "array item"
    return (
        <React.Fragment>
            <Router>
                <Link to={item.id}>
                    <CategoryItem
                        key={item.id}
                        itemTitle={item.title}
                    />
                </Link>
            </Router>
        </React.Fragment>
    )
}

//Markup to render categories on main page from array
function renderMainPage() {
    return (
        <React.Fragment>
            <main role="main" className="d-flex flex-direction-row flex-shring-0">
                <section className="front">
                    <h1>Тропические моря</h1>
                    <div className="container d-flex justify-content-start flex-wrap">
                        {Cats.map(renderItems)}
                    </div>
                </section>
                <section className="front">
                    <h1>Дальневосточные моря</h1>
                    <div className="container d-flex justify-content-start flex-wrap">
                        {Cats.map(renderItems)}
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

//Routing for main page with 2 routes - main page and 1st level navigation
function Routing() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path='/' component={renderMainPage}/>
                    <Route path='/:cat_id' component={renderLevel1}/>
                    {/* <Route path='/:cat_id/:subcat_id' component={TempComponent}/> */}
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Routing;
