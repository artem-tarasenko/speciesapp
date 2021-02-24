import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ReactGallery from 'reactive-blueimp-gallery';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import RenderGallery from "./RenderGallery";

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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

// function RenderArticlePreview(props) {
// 	//props - article (obj)
// 	console.log(props.article);
// 	if (props.article.hasOwnProperty("title")) {
// 		console.log(props.article);
// 		return (
//
// 		)
// 	} else {
// 		return <p>nothing to show</p>
// 	}
// }


function RenderSingleArticle(props) {
	//props  ###  match - object from Router with some data ###  article - source object  ### number from search ### gallery - bool
	//getting starting data from mongo through Strapi API
	let link;
	const classes = useStyles();
	
	if(!props.article) {
		link = "http://localhost:1337/articles?id=" + props.match.params.article;
	} else {
		link = "http://localhost:1337/articles?id=" + props.article;
	}

	const data = useFetch(link);

	//short conditional to prevent the following code from executing before getting data from API
	//since it's based on data object
	if (!data) {
		return <section className="content"><div className="loader"><CircularProgress /></div></section>
	} else {
		let article;
		//conditional to allow the component to be used with different props (either parent ID or target category object)
		if (props.article) {
			article = props.article;
		// } else if (props.number) {
		// 	article = data.find( art => props.number === art.number );
		} else if (props.match){
			article = data.find( art => props.match.params.article === art.id );
		}

		return (
			<>
					<section className="content article d-flex flex-column">
						<div className="title-wrapper d-flex flex-row justify-content-between">
							<h2>{article.subtitle.length > 0 ? article.subtitle : article.title}</h2>
							{article.number && <span>{article.number}</span>}
						</div>
							<h4>{article.title !== article.subtitle ? article.title : null}</h4>
							<hr />
							<ReactMarkdown children={article.content} />
							{props.gallery && <RenderGallery article={article} />}
					</section>
			</>
		)
	}
}



export default RenderSingleArticle;
// export { RenderArticlePreview };
