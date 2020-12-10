import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
	const data = useFetch("http://localhost:1337/articles");
	//getting what needs to be rendered
	const article = data.find( art => props.match.params.article === art.id );

	 if (!data) {
		return <section className="container"><p>Wait, loading...</p></section>
	} else {
		let rootId = "5fd17a2a9af901587864d1cf";
		const rootCategory = data.find(item => item.id === rootId);

		return (
			<>
			<section className="container">
				<h3>{article.title}</h3>
				<p>{article.subtitle}</p>
				<hr />
				<p>{article.content}</p>
			</section>
			</>
		)
	}
}

export default RenderSingleArticle;
