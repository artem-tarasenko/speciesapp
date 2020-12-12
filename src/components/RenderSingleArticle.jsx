import React, { useState, useEffect } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ReactMarkdown from "react-markdown";

//a set of options declared for Ligthbox gallery, full list on NpmJs - simple react lightbox
const options = {
  settings: {
    overlayColor: "rgb(30 36 43 / 91%);",
    autoplaySpeed: 1500,
	transitionSpeed: 900,
	hideControlsAfter: false,

  },
  buttons: {
    backgroundColor: "#1b5245",
	iconColor: "rgba(126, 172, 139, 0.8)",
	showAutoplayButton: false,
	showDownloadButton: false,
	showFullscreenButton: false,
	showThumbnailsButton: false
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  }
};

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
		return <section className="content"><p>Wait, loading...</p></section>
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
			    <SimpleReactLightbox>
					<section className="content article d-flex flex-column">
						<div className="title-wrapper d-flex flex-row justify-content-between"><h2>{article.title}</h2><span>{article.number && article.number}</span></div>
						<h4>{article.subtitle}</h4>
						<hr />
						<ReactMarkdown children={article.content} />
						<div className="gallery mt-auto d-flex flex-row flex-nowrap">
							<SRLWrapper options={options}>
								{article.gallery.map( (item, index) => {
									if (item.mime.startsWith("image")) {
										return <img key={index} src={`http://localhost:1337${item.url}`} alt={item.caption}></img>
									} else if (item.mime.startsWith("video")) {
										return (
											<video width="1280" height="1024" autoplay="false" controls="controls">
   											<source src={`http://localhost:1337${item.url}`} type='video/mp4'></source>
											</video>
										)
									}
								})}
							</SRLWrapper>
						</div>
					</section>
				</SimpleReactLightbox>
			</>
		)
	}
}

export default RenderSingleArticle;
