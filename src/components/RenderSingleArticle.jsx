import React, { useState, useEffect } from "react";

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

	if (!data) {
		return <section className="container"><p>Wait, loading...</p></section>
	} else {
		let article
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
				<p>{article.content}</p>
			</section>
			</>
		)
	}
}

export default RenderSingleArticle;
