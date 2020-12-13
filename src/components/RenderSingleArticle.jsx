import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ReactGallery from 'reactive-blueimp-gallery';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


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

		//reforming article.gallery array to prepare it to be rendered by ReactGallery with additional condition
		//about what type of content is there picture of video file, since ReactGallery has a different layout for them
		const galleryItems = article.gallery.map( item => {
			if (item.mime === "video/mp4") {
				return {
					href: "http://localhost:1337" + item.url,
					type: item.mime,
					poster: 'http://localhost:1337/uploads/video_thumb_2130e846b4.jpg',
					'data-poster': 'http://localhost:1337/uploads/video_cover_99577ae76e.jpg'
				};
			} else if (item.mime === "image/jpeg") {
				return {
					href: "http://localhost:1337" + item.url,
					type: item.mime,
					thumbnail: "http://localhost:1337" + item.formats.thumbnail.url,
				};
			}
		})
		let navClasses="gallery-nav";

		if (galleryItems.length <= 4) {
			navClasses = "gallery-nav disabled";
		}

		//here should be a function to control slider scroll
		function sliderMoveLeft(event) {
			// event.preventDefault;
			let galleryBody = document.querySelector(".testing-thumbnails");
			let position = parseInt(window.getComputedStyle(galleryBody,null).getPropertyValue("left"), 10);
			
			galleryBody.style.left = (position < 0) && position + 500 + "px";

			console.log(position);
		}

		function sliderMoveRight(event) {
			// event.preventDefault;
			let galleryBody = document.querySelector(".testing-thumbnails");
			let position = parseInt(window.getComputedStyle(galleryBody,null).getPropertyValue("left"), 10);
			let limit = (galleryBody.children.length - 4) * -250;

			galleryBody.style.left = (position > limit) && position - 500 + "px";

			console.log(position);
			console.log(limit);
		}

		return (
			<>
					<section className="content article d-flex flex-column">
						<div className="title-wrapper d-flex flex-row justify-content-between"><h2>{article.title}</h2><span>{article.number && article.number}</span></div>
						<h4>{article.subtitle}</h4>
						<hr />
						<ReactMarkdown children={article.content} />
						<div className="gallery mt-auto">
							<div className={navClasses}>
								<a href="#" className="carousel-arrow nav-left" onClick={sliderMoveLeft}>
									<NavigateBeforeIcon fontSize="large" />
								</a>
								<a href="#" className="carousel-arrow nav-right" onClick={sliderMoveRight}>
									<NavigateNextIcon />
								</a>
							</div>
							<div className="gallery-wrapper">
								<ReactGallery withControls className="testing" onclick="dp" >
									{ galleryItems.map((item) => {
										return <ReactGallery.Slide {...item} key={ item.href } className="gallery-item" />;
									})}
								</ReactGallery>
							</div>
						</div>
					</section>
			</>
		)
	}
}



export default RenderSingleArticle;
