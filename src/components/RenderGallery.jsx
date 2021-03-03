import React from "react";
import ReactGallery from 'reactive-blueimp-gallery';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Url from "./Url.jsx";


export default function RenderGallery(props) {
	//props - article, object with gallery prop

	//reforming article.gallery array to prepare it to be rendered by ReactGallery with additional condition
	//about what type of content is there picture of video file, since ReactGallery has a different layout for them
	const galleryItems = props.article.gallery.map( item => {
		console.log(Url);

		if (item.mime === "video/mp4") {
			return {
				href: Url + item.url,
				type: item.mime,
				poster: `${Url}/uploads/video_thumb_2130e846b4.jpg`,
				'data-poster': `${Url}/uploads/video_cover_99577ae76e.jpg`
			};
		} else if (item.mime === "image/jpeg" || item.mime === "image/png") {
			return {
				href: Url + item.url,
				type: item.mime,
				thumbnail: Url + item.formats.thumbnail.url,
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
		let galleryBody = document.querySelector(".gallery-thumbnails");
		let position = parseInt(window.getComputedStyle(galleryBody,null).getPropertyValue("left"), 10);

		galleryBody.style.left = (position < 0) && position + 450 + "px";
	}

	function sliderMoveRight(event) {
		// event.preventDefault;
		let galleryBody = document.querySelector(".gallery-thumbnails");
		let position = parseInt(window.getComputedStyle(galleryBody,null).getPropertyValue("left"), 10);
		let limit = (galleryBody.children.length - 4) * -250;

		galleryBody.style.left = (position > limit) && position - 450 + "px";
	}


	return (
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
				<ReactGallery withControls className="gallery">
					{ galleryItems.map((item, index) => {
						return <ReactGallery.Slide {...item} key={index} className="gallery-item" />;
					})}
				</ReactGallery>
			</div>
		</div>
	)
}
