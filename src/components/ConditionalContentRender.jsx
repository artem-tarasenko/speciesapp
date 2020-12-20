import React, { useState, useEffect } from "react";
import {Switch, Route, Link} from "react-router-dom";
import {Subcategory, Article} from "./ContentRouting"
import CategoryItem from "./CategoryItem";
import RenderSingleArticle from "./RenderSingleArticle";

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
		let test = match.url.split("/");
		let parent = data.find( item => item.id === test[test.length - 1]);

		// console.groupCollapsed("DEBUGING CONDITIONAL RENDER")
			// console.log("Parent variable before checking conditions what does it have");
			// console.log(parent);
			// console.log("props.match");
			// console.log(match);
			// console.log("Trying to get last ID from match params url");
			// console.log(match.url.split("/"));
			// console.log(test);
		// console.groupEnd();

	   	if (parent.subcategories.length > 0) {
			//console.log("ConditionalContentRender(): rendering subcategories...");
			return (
				<>
					{match.isExact && (
						<>
							<section className="content categories">
								<div className="d-flex d-row flex-wrap">
									{parent.subcategories.map( obj => <CategoryItem key={obj.id} category={obj} url={`${match.url}/${obj.id}`} /> )}
								</div>
							</section>
						</>
					)}
					<Switch>
						<Route path={`${match.path}/:subcategory`} component={Subcategory} />
					</Switch>
				</>
			)
		} else if (parent.articles.length > 0) {
			//console.log("ConditionalContentRender(): rendering articles...");
			return (
				<>
				{match.isExact && (
					<>
						<section className="content categories mCustomScrollbar">
							<div className="d-flex d-row flex-wrap">
								{parent.articles.map( obj => <CategoryItem key={obj.id} category={obj} url={`${match.url}/${obj.id}`} /> )}
							</div>
						</section>
					</>
				)}
					<Switch>
						<Route path={`${match.path}/:article`} component={Article} />
					</Switch>
				</>
			)
		} else if (parent.hasOwnProperty("description")) {
			//console.log("ConditionalContentRender(): rendering description...");
			return <RenderSingleArticle article={parent.description} gallery={true} />

		} else {
			console.log("Parent category does not have any description, or article does not found");
			console.log(parent);
			return (
				<>
					<section className="content">
					<h3>Something went wrong!</h3>
					<hr />
					<p>Parent category does not have any description, or article was not found</p>
					</section>
				</>
			)
		}
	}
}

export default ConditionalContentRender;
