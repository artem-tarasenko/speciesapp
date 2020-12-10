import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';

//fetch data from URL passed by calling func, with effect hook should be updated only when on URL change
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


function RenderSingleArticle(props) {
	//props  ###  match - object from Router with some data ###  article - source object  ###   
	//getting starting data from mongo through Strapi API
	const data = useFetch("http://localhost:1337/articles");
	
	//short conditional to prevent the following code from executing before getting data from API
	//since it's based on data object
	if (!data) {
		return <section className="container"><p>Wait, loading...</p></section>
	} else {
		let article;
		//conditional to allow the component to be used with different props (either parent ID or target category object)
		if (!props.article) {
			article = data.find( art => props.match.params.article === art.id );
		} else {
			article = props.article;
		}

		return (
			<>
			<section className="container">
				<h3>{article.title}</h3>
				<p>{article.subtitle}</p>
				<hr />
				<ReactMarkdown children={article.content} />
			</section>
			</>
		)
	}
}

export default RenderSingleArticle;
