import React, { useState } from "react";
import {Cats, SubcatsDB, ArticlesDB} from "./testdata";

import {
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { findByTitle } from "@testing-library/react";

const categories = [
  { id: "0", title: "Kingdom: Animal", subcategories: [1, 2, 3] },
  { id: 1, title: "Phylum: Chordata", subcategories: [4, 5, 6] },
  { id: 2, title: "Clade: Synapsida", articles: [1, 2] },
  { id: 3, title: "Class: Mammailia", subcategories: [8, 9, 10] },
  { id: 4, title: "Order: Carnivora", articles: [1, 2]  },
  { id: 5, title: "Subfamily: Felinae", articles: [1, 2, 3, 4] },
  { id: 6, title: "Genus: Felis", articles: [5, 6, 7] },
  { id: 7, title: "Species: Felis catus", articles: [8] },
  { id: 8, title: "Order: Carnivora", articles: [1, 5, 7, 9] },
  { id: 9, title: "Subfamily: Felinae", articles: [2, 4, 6, 8] },
  { id: 10, title: "Genus: Felis", articles: [1, 5, 7, 10] },
];

const articles = [
  { id: 1, title: "Article 1 Chordata"},
  { id: 2, title: "Article 2 Synapsida"},
  { id: 3, title: "Article 3 Mammailia"},
  { id: 4, title: "Article 4 Carnivora"},
  { id: 5, title: "Article 5 Felinae"},
  { id: 6, title: "Article 6 Felis"},
  { id: 7, title: "Article 7 Felis catus"},
  { id: 8, title: "Article 8 Carnivora"},
  { id: 9, title: "Article 9 Felinae"},
  { id: 10, title: "Article 10 Felis"},
];

function RenderMenu() {
    const [ state, setState] = useState([{ path: "/", name: "ROOT" },]);

    console.log(state);
    return (
            <nav className="menu container">
                <Link to={state[0].path}>{state[0].name}</Link>
                {/* {state.map((itemObject, index) => {
                    <p key={index}> path -> {itemObject.path} / name -> {itemObject.name}</p>
                })} */}
            </nav>
    )
}

function updateMenu() {

    return(
        <>
        </>
    )
}

function RenderMenu2(props) {
    //destructuring passed match object to extract params from it as variables
    const {category, subcategory, article} = props.match.params;

    //build strings from variables to use as routes
    const link1 = category; //ID
    const link2 = category + "/" + subcategory;
    const link3 = category + "/" + subcategory + "/" + article;
    //find titles for links
    const link1Name = findTitle(category, "category");
    const link2Name = findTitle(subcategory, "subcategory");
    const link3Name = findTitle(article, "article");

    //function to find title in data arrays using params: ID and type of item
    function findTitle(targetItem, type) { //where item = ID
        let linkTitle;
        if (type === "category" || type === "subcategory") {
            linkTitle = categories.find( item => item.id == targetItem).title;
        } else if (type === "article") {
            linkTitle = articles.find( item => item.id == targetItem).title;
        } 
        return linkTitle;
    }



    //menu component with links to all levels
    return (
            <nav className="sidebar container d-flex flex-column">
                <Link to="/">HOME</Link>
                { category && <Link to={`/${link1}`}>{link1Name}</Link> }
                { subcategory && <Link to={`/${link2}`}>{link2Name}</Link> }
                { article && <NavLink to={`/${link3}`} activeClassName="active">{link3Name}</NavLink> }
            </nav>
    )

}

//============================================================================
//=========================   RENDER LEVEL 4 PAGE  ===========================
//============================  SINGLE ARTICLE  ==============================
function Article({match}) {
    // console.log("===== LEVEL 4 =====");
    // console.log(match.url);
    // console.log(match.path);
    // console.log(match.params);
    // console.log(match.isExact);
    // console.log("===================");

    const article = articles.find(art => {
        return parseInt(match.params.article) === art.id;
    });

    const link1 = match.params.category;
    const link2 = match.params.category + "/" + match.params.subcategory;
    const link3 = match.params.category + "/" + match.params.subcategory + "/" + match.params.article;

 

    return (
        <>
            {/* <nav className="sidebar container d-flex flex-column">
                <Link to="/">HOME</Link>
                <Link to={`/${link1}`}>Cat</Link>
                <Link to={`/${link2}`}>Subcat</Link>
                <NavLink to={`/${link3}`} activeClassName="active">Art</NavLink>
            </nav>
            <hr /> */}
            <RenderMenu2
                match={match}
            />
            <div className="container">
                {match.isExact && (
                    <>
                        <h3>{article.title}</h3>
                        <hr />
                        <p>Article found, id is {article.id}</p>
                    </>
                )}
            </div>
        </>
    )
}

//============================================================================
//=========================   RENDER LEVEL 3 PAGE  ===========================
//===============================  ARTICLES  =================================
function Subcategory({match}) {
    // console.log("===== LEVEL 3 =====");
    // console.log(match.url);
    // console.log(match.path);
    // console.log(match.params);
    // console.log(match.isExact);
    // console.log("===================");

    const subcategory = categories.find(category => {
        return parseInt(match.params.subcategory) === category.id;
    });

    return (
        <>
            <div className="container">
                
                {match.isExact && (
                    <>
                        <h3>{subcategory.title}</h3>
                        <hr />
                        <p>Category found, id is {subcategory.id}</p>
                    
                        {subcategory.articles.map(articleId => {
                            return (
                                <div>
                                    <Link key={articleId} to={`${match.url}/${articleId}`}>
                                    {articles.find(art => art.id === articleId).title}
                                    </Link>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        <Switch>
            <Route path={`${match.path}/:article`} component={Article} />
        </Switch>
        </>
    )
}


//============================================================================
//=========================   RENDER LEVEL 2 PAGE  ===========================
//=============================  SUBCATEGORIES  ==============================
function Category({match}) {
    // console.log("===== LEVEL 2 =====");
    // console.log(match.url);
    // console.log(match.path);
    // console.log(match.params);
    // console.log(match.isExact);
    // console.log("===================");

    const category = categories.find(category => {
        return parseInt(match.params.category) === category.id;
    });

    return (
        <>  
            <div className="container">
                {match.isExact && (
                    <>
                        <h3>{category.title}</h3>
                        <hr />
                        <p>Category found, id is {category.id}</p>
                        {category.subcategories.map(subCategoryId => {
                            return (
                            <div>
                                <Link key={subCategoryId} to={`${match.url}/${subCategoryId}`}>
                                {categories.find(cat => cat.id === subCategoryId).title}
                                </Link>
                            </div>
                            );
                        })}
                    </>
                )}
            </div>

        <Switch>
        <Route path={`${match.path}/:subcategory`} component={Subcategory} />
        </Switch>
        </>
    )
}


//============================================================================
//=========================   RENDER LEVEL 1 PAGE  ===========================
//==============================  CATEGORIES  ================================
function Home() {
    const rootCategory = categories.find(item => item.id == 0);
    let rootCategories = rootCategory.subcategories.map(subcatID => categories.find(item => item.id == subcatID));

    return (
        <>
            
            <div className="container">
            <h2>Home page</h2>
            <hr />
            {rootCategories.map((item, index) => {
                return ( 
                    <p key={index}><Link to={`/${item.id}`}>{item.title}</Link></p>
                )
            })}
            </div>
        </>
    )
}


//============================================================================
//============================   BASIC ROUTING  ==============================
//============================================================================
function TestRouting() {
    return (
        <>
        <RenderMenu />
        <Switch>
            <Route exact path={`/`} component={Home} />
            <Route path={`/:category`} component={Category} />
        </Switch>
        </>
    )
}

export default TestRouting;