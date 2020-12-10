import React, { useState, useEffect } from "react";
import {Switch, Route, Link} from "react-router-dom";
import {Subcategory, Article} from "./ContentRouting"

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


function ConditionalContentRender(props) {
	const data = useFetch("http://localhost:1337/" + props.type);

	let match = props.match;

	if (!data) {
	   return <section className="container"><p>Wait, loading...</p></section>
   } else {
	   	let parent = data.find( item => item.id === match.params.category);

	   	if (parent.hasOwnProperty("subcategories")) {
			console.log("ConditionalContentRender(): rendering subcategories...");
			return (
			   <>
			       {match.isExact && (
			           <>
							<section className="container">
			               	<h3>{parent.title}</h3>
			               	<hr />
				               {parent.subcategories.map( subcat => {
				                   return (
				                   <div>
				                       <Link key={subcat.id} to={`${match.url}/${subcat.id}`}>
				                       	{subcat.title}
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
                           {parent.articles.map(articleId => {
                               return (
                               <div>
                                   <Link key={articleId} to={`${match.url}/${articleId}`}>
                                       {data.find(art => art.id === articleId).title}
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
           	let idSubtracted = parent.description[0].split("a");
   			if (idSubtracted[1] <= data.length) {
               	const article = data.find( item => item.id === parent.description);
   	        	return (
	   				<>
	   					<section className="container">
	   	                    <h3>{article.title}</h3>
	   	                    <hr />
	   	                    <p>Some text here from {article.title}</p>
	   	                    <p>{article.subtitle}</p>
	   						<p>{article.content}</p>
	   					</section>
	   				</>
   				)
			}
   		} else {
   			console.log("Parent category does not have any description, or article does not found");
			console.log(parent);
   			return (
   				<>
					<section className="container">
   					<h3>Something went wrong!</h3>
   					<hr />
   					<p>Parent category does not have any description, or article was not found</p>
					</section>
   				</>
   			)
   		}

		return 	<section className="container"><h3>{parent.title}</h3><p>{parent.content}</p></section>;
	}
}

export default ConditionalContentRender;
