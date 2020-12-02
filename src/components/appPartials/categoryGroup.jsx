import React from "react";
import CategoryItem from "./categoryItem";
import {Cats, Subcats, Articles} from "./testdata";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";




function renderItems(item) {
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


function SingleCat(props) {
    //Get menu-1 ID (parent) from passed props (cat_id)
    let parentCategoryId = props.match.params.cat_id;
    //find object in the array
    let parentCategoryObj = Cats.find(item => item.id == parentCategoryId);
    //find corresponding object in DB2 - array of objects with children

    //probably shoild check somehow if it is parent or not and render different components
    //can use bools in DB1 item

    
    if (parentCategoryObj.hasArticle) { //if hasArticle - render 1 page article
        console.log("Rendering description to category");

        return (
            <main role="main" className="d-flex flex-direction-row flex-shring-0">
                <section>
                    <p>Parent Category ID is {parentCategoryId}</p>
                    <p>Has to render description</p>
                    <h1>Тропические моря</h1>
                    <Link to="/">BACK LINK</Link>
                </section>
            </main>
        )
    } else if (parentCategoryObj.hasSubcategories) { //if hasSubcats - render subcats from BD2
        console.log("Render subcatigories for this category");
        return (
            <main role="main" className="d-flex flex-direction-row flex-shring-0">
                <section>
                    <p>Parent Category ID is {parentCategoryId}</p>
                    <p>Has to render subcategories</p>
                    <h1>Тропические моря</h1>
                        <div className="container d-flex justify-content-start flex-wrap">
                            {/* {subCategory.children && subCategory.children.map(renderItems)} */}
                            {/* here must be children cats from DB2 */}
                        </div>
                    <Link to="/">BACK LINK</Link>
                </section>
            </main>
        )
    } else if (parentCategoryObj.hasItems) { //if hasItems - render article list
        console.log("Render article list in this category");
        return (
            <main role="main" className="d-flex flex-direction-row flex-shring-0">
                <section>
                    <p>Parent Category ID is {parentCategoryId}</p>
                    <p>Has to render list of articles from DB2</p>
                    <h1>Тропические моря</h1>
                        <div className="container d-flex justify-content-start flex-wrap">
                            {/* {subCategory.children && subCategory.children.map(renderItems)} */}
                        </div>
                    <Link to="/">BACK LINK</Link>
                </section>
            </main>
        )
    }
    

    

    //all cases with a separate functions: renderDescription, renderSubcats, renderArticles

    // return (
    //     <main role="main" className="d-flex flex-direction-row flex-shring-0">
    //         <section>
    //             <p>Parent Category ID is {parentCategoryId}</p>
    //             <h1>Тропические моря</h1>
    //                 <div className="container d-flex justify-content-start flex-wrap">
    //                     {subCategory.children && subCategory.children.map(renderItems)}
    //                 </div>
    //                 <div></div>
    //             <Link to="/">BACK LINK</Link>
    //         </section>
    //     </main>
    // )
}


function renderCategories() {
    return (
        <React.Fragment>
            <main role="main" className="d-flex flex-direction-row flex-shring-0">
                <section>
                    <h1>Тропические моря</h1>
                    <div className="container d-flex justify-content-start flex-wrap">
                        {Cats.map(renderItems)}
                    </div>
                </section>
                <section>
                    <h1>Дальневосточные моря</h1>
                    <div className="container d-flex justify-content-start flex-wrap">
                        {Cats.map(renderItems)}
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default function Routing() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path='/' component={renderCategories}/>
                    <Route path='/:cat_id' component={SingleCat}/>
                </Switch>
            </Router>
        </React.Fragment>
    )
}











// function CategoryGroup() {
//     return (
//         <React.Fragment>


//             <main role="main" className="d-flex flex-direction-row flex-shring-0">
//                 <section>
//                     <h1>Тропические моря</h1>
//                     <div className="container d-flex justify-content-start flex-wrap">
//                         {DB1.map(renderItems)}
//                     </div>
//                 </section>
//                 <section>
//                     <h1>Дальневосточные моря</h1>
//                     <div className="container d-flex justify-content-start flex-wrap">
//                         {DB1.map(renderItems)}
//                     </div>
//                 </section>
//             </main>

//             <Switch>
//                 <Route path="/:id" component={<CategoryItem key={"12"} itemTitle={"Custom item"} />} />
//             </Switch>
// 		</React.Fragment>
//     );
// }