import React, { useState, useEffect } from "react";
import ReactGallery from 'reactive-blueimp-gallery';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


export default function RenderGallery(props) {
	//props - article, object with gallery prop

	//reforming article.gallery array to prepare it to be rendered by ReactGallery with additional condition
	//about what type of content is there picture of video file, since ReactGallery has a different layout for them
	const galleryItems = props.article.gallery.map( item => {
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

		galleryBody.style.left = (position < 0) && position + 450 + "px";
	}

	function sliderMoveRight(event) {
		// event.preventDefault;
		let galleryBody = document.querySelector(".testing-thumbnails");
		let position = parseInt(window.getComputedStyle(galleryBody,null).getPropertyValue("left"), 10);
		let limit = (galleryBody.children.length - 4) * -280;

		galleryBody.style.left = (position > limit) && position - 450 + "px";
	}


	return (
		<div className="gallery mt-auto">
			<div className="gallery-nav">
				<a href="#" className="carousel-arrow nav-left" onClick={sliderMoveLeft}>
					<NavigateBeforeIcon fontSize="large" />
				</a>
				<a href="#" className="carousel-arrow nav-right" onClick={sliderMoveRight}>
					<NavigateNextIcon />
				</a>
			</div>
			<div className="gallery-wrapper">
				<ReactGallery withControls>
					{ galleryItems.map((item) => {
						return <ReactGallery.Slide {...item} key={ item.href } className="gallery-item" />;
					})}
				</ReactGallery>
			</div>
		</div>
	)
}
