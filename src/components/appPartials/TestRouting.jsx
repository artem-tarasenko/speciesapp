import React, { useState } from "react";
import {Cats, SubcatsDB, ArticlesDB} from "./testdata";

import {
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";


const categories = [
  { id: "0", title: "Kingdom: Animal", subcategories: [1, 2, 3] },
  { id: 1, title: "Phylum: Chordata with SUBCATS", subcategories: [4, 5, 6, 8, 9, 10] },
  { id: 2, title: "Clade: Synapsida with ARTICLES", articles: [1, 2] },
  { id: 3, title: "Class: Mammailia with DESCRIPTION", description: 10},
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
  { id: 10, title: "DESCR for subcar 3 Felis"},
];



// function RenderMenu2(props) {
//     //destructuring passed match object to extract params from it as variables
//     const {category, subcategory, article} = props.match.params;

//     //build strings from variables to use as routes
//     const link1 = category; //ID
//     const link2 = category + "/" + subcategory;
//     const link3 = category + "/" + subcategory + "/" + article;
//     //find titles for links
//     const link1Name = findTitle(category, "category");
//     const link2Name = findTitle(subcategory, "subcategory");
//     const link3Name = findTitle(article, "article");

//     //function to find title in data arrays using params: ID and type of item
//     function findTitle(targetItem, type) { //where item = ID
//         let linkTitle;
//         if (type === "category" || type === "subcategory") {
//             linkTitle = categories.find( item => item.id == targetItem).title;
//         } else if (type === "article") {
//             linkTitle = articles.find( item => item.id == targetItem).title;
//         } 
//         return linkTitle;
//     }



//     //menu component with links to all levels
//     return (
//             <nav className="sidebar container d-flex flex-column">
//                 <Link to="/">HOME</Link>
//                 { category && <Link to={`/${link1}`}>{link1Name}</Link> }
//                 { subcategory && <Link to={`/${link2}`}>{link2Name}</Link> }
//                 { article && <NavLink to={`/${link3}`} activeClassName="active">{link3Name}</NavLink> }
//             </nav>
//     )

// }

// function RenderMenu(props) {
//     const {path, setPath} = useState([{url: "/", name: "ROOT"}])

//     console.log("==== MENU STATEU PDATED");
//     console.log(path);
// }

// function updateMenu({path}, action) {
//     setPath( (prevValue) => [...prevValue, path]);
// }

function testfunc(evt) {
    console.log(evt.target);
}

function ConditionalContentRender(props) {
    let parent = props.parent;
    let match = props.match;

    if (parent.hasOwnProperty("subcategories")) {
        console.log(match);
        console.log("ConditionalContentRender(): rendering subcategories...");
        return (
            <div className="container">
                {match.isExact && (
                    <>
                        <h3>{parent.title}</h3>
                        <hr />
                        <p>parent found, id is {parent.id}</p>
                        {parent.subcategories.map(subCategoryId => {
                            return (
                            <div>
                                <Link key={subCategoryId} to={`${match.url}/${subCategoryId}`}>
                                {categories.find(cat => cat.id === subCategoryId).title} ***
                                </Link>
                            </div>
                            );
                        })}
                    </>
                )}
                <Switch>
                    <Route path={`${match.path}/:subcategory`} component={Subcategory} />
                </Switch>
            </div>
        )
    } else if (parent.hasOwnProperty("articles")) {
        console.log("ConditionalContentRender(): rendering articles...");
        return (
            <div className="container">
                {match.isExact && (
                    <>
                        <h3>{parent.title}</h3>
                        <hr />
                        <p>parent found, id is {parent.id}</p>
                        {parent.articles.map(articleId => {
                            return (
                            <div>
                                <Link key={articleId} to={`${match.url}/${articleId}`}>
                                    {articles.find(art => art.id === articleId).title} ---- *#*
                                </Link>
                            </div>
                            );
                        })}

                    </>
                )}
                <Switch>
                    <Route path={`${match.path}/:article`} component={Article} />
                </Switch>
            </div>
        )
    } else if (parent.hasOwnProperty("description")) {
        console.log("ConditionalContentRender(): rendering description...");
        let descArticle =  articles.find( art => art.id === parent.description)
        return (
            <div className="container">
                {match.isExact && (
                    <>
                        <h3>{descArticle.title}</h3>
                        <hr />
                        <p>Some text here from {descArticle.title}</p>
                        <p>parent found, id is {parent.id}</p>
                    </>
                )}
            </div>
        )
    } else {
        console.log("Something wrong with testing parent category");
    }
}


//============================================================================
//=========================   RENDER LEVEL 4 PAGE  ===========================
//============================  SINGLE ARTICLE  ==============================
function Article({match}) {
    //getting what needs to be rendered
    const article = articles.find( art => parseInt(match.params.article) === art.id );

    return (
        <>
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
    //getting what needs to be rendered
    const subcategory = categories.find( category => parseInt(match.params.subcategory) === category.id );

    //---------------------------------------------------------------

    return (
        <>
        <ConditionalContentRender parent={subcategory} match={match} logging={"rendered Subcat"} />        

        </>
    )
}


//============================================================================
//=========================   RENDER LEVEL 2 PAGE  ===========================
//=============================  SUBCATEGORIES  ==============================
function Category({match}) {
    //getting what needs to be rendered
    const category = categories.find( category => parseInt(match.params.category) === category.id );

    return (
        <>  
            <ConditionalContentRender parent={category} match={match} logging={"rendered Category"} />

        </>
    )
}


//============================================================================
//=========================   RENDER LEVEL 1 PAGE  ===========================
//==============================  CATEGORIES  ================================
function Home({match}) {
    const rootCategory = categories.find(item => item.id == 0);
    let rootCategories = rootCategory.subcategories.map(subcatID => categories.find(item => item.id == subcatID));
    
    return (
        <>
            <div className="container">
                {match.isExact && (
                    <>
                        <h3>{rootCategory.title}</h3>
                        <hr />
                        {rootCategories.map(subCat => {
                            return (
                            <div key={subCat.id}>
                                <Link to={`${subCat.id}`} onClick="testfunc">
                                    {categories.find(cat => cat.id === subCat.id).title} ***
                                </Link>
                            </div>
                            );
                        })}
                    </>
                )}
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
        <Link to="/">HOME</Link>
        <Switch>
            <Route exact path={`/`} component={Home} />
            <Route path={`/:category`} component={Category} />
        </Switch>
        </>
    )
}

export default TestRouting;