import React, { useState, useEffect } from "react";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
// import {RenderArticlePreview} from "./RenderSingleArticle";
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



export default function Footer() {
	const [link, setLink] = useState(["/"]);
	const [value, setValue] = useState("");
	const [article, setArticle] = useState();

	const data = useFetch("http://localhost:1337/articles");
	let searchStatus = useFetch("http://localhost:1337/settings");
	if(searchStatus) {
		searchStatus = searchStatus[0].Search;
	}
	console.log("search is - ", searchStatus);
	const resultTitle = document.querySelector(".search-result-title");
	let inputField;

//==============================================================================
	function toggleSearch() {
		let footer = document.querySelector(".footer");
		let body = document.querySelector("#root");
		let buttonTitle = document.querySelector(".search-title");
		let title = buttonTitle.innerText
		let buttonIcons = document.querySelectorAll(".search-icon");

		//through classes show/hide search panel, icon for title and dark overlay over body
		body.classList.toggle("shadow");
		footer.classList.toggle("closed");
		buttonIcons.forEach(item => item.classList.toggle("hidden"));

		//changing search button title when it's opened and closed
		if (title === "ПОИСК ПО НОМЕРУ") {
			buttonTitle.innerText = "ЗАКРЫТЬ";
		} else {
			buttonTitle.innerText = "ПОИСК ПО НОМЕРУ";
		}

		ClearSearch();
		//disable search results
	}
//==============================================================================
	function InitSearch() {
		//updating search result title to show what has been searched for
		resultTitle.innerText = `РЕЗУЛЬТАТЫ ПОИСКА - "${value}"`;
		ClearSearch();

		//show block with articles preview
		document.querySelector(".search-result").classList.remove("hidden");

		//search for an articles
		let searchString = "D" + value;
		let newArticle = data.find( item => item.number === searchString );

		if (!newArticle) {
			return
		}

		let pathArray = [];
		let pathCategory;
		let pathSubcategory;
		let pathArticle = newArticle.id;

		if (newArticle.hasOwnProperty("parentCategory")) {
			if (newArticle.parentCategory.hasOwnProperty("parentCategory")) {
				pathCategory = newArticle.parentCategory.parentCategory;
				pathSubcategory = newArticle.parentCategory.id;
			} else {
				pathCategory = newArticle.parentCategory.id;
			}
		} else if (newArticle.hasOwnProperty("categoryDescription")) {
			pathCategory = newArticle.categoryDescription.id;
		} else {
			console.log("Error - Searching engine has found an article but it does not belong to any category. Check this category in Strapi admin panel.");
		}

		pathCategory && pathArray.push(pathCategory);
		pathSubcategory && pathArray.push(pathSubcategory);
		pathArticle && pathArray.push(pathArticle);

		setValue(searchString);
		setArticle(newArticle);
		setLink("/" + pathArray.join("/"));
	}
//==============================================================================
	function handleInput(event) {
		//setting limit "3" to number input and updating input value with button clicks
		inputField = document.querySelector("#search-input"); //obj

		if (value.length < 3) {
			let newValue = value + event.target.id;
			// console.log("event target id: " + event.target.id);
			// console.log("newValue: " + newValue);
			// console.log(typeof(newValue));
			inputField.value = newValue;
			setValue(newValue);
		} else {
			//clean input field or block input
			ClearSearch();
		}
	}
//==============================================================================
	function ClearSearch() {
		//find and store input field that will show user input from buttons
		//find and store resulting title object to modify text
		inputField = document.querySelector("#search-input"); //obj
		document.querySelector(".search-result").classList.add("hidden");
		inputField.value = "";
		setValue("");
		setArticle();
		setLink("/");
	}
//==============================================================================



	if (!data) {
		return <section className="container"><p>Wait, loading...</p></section>
	} else {
		//create an array of buttons from 0 to 9
		const buttons = [];
		for (let i = 0; i < 10; ++i) {
			buttons.push(<button type="button" className="input-btn m-2" onClick={handleInput} id={i} value={i}>
				<p className="label">{i}</p>
				</button>)
		}

		// console.log(article);
	    return (
	        <React.Fragment>
				<footer className="footer d-flex flex-column">
				{ searchStatus ? 
					<React.Fragment>
						<div className="footer-header d-flex flex-row justify-content-between pr-5 pl-5">
							<div className="search">
								<button className="search-btn d-flex flex-row" onClick={toggleSearch}>
									<CloseIcon fontSize="large" className="search-icon hidden" />
									<SearchIcon fontSize="large" className="search-icon" />
									<h3 className="search-title">ПОИСК ПО НОМЕРУ</h3>
								</button>
							</div>
							<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
								<p>ТИХООКЕАНСКИЙ ФИЛИАЛ ФГБНУ "ВНИРО"</p>
							</div>
						</div>

				
						<div className="footer-panel d-flex flex-row">
							<div className="input-group pr-5 pl-5 mt-4">
								<input disabled type="text" name="number" id="search-input" />
								<div className="d-flex flex-column align-items-between">
									<button className="clear-btn m-2" onClick={InitSearch}><p className="label">НАЙТИ</p></button>
									<button className="clear-btn m-2" onClick={ClearSearch}><p className="label">ОЧИСТИТЬ</p></button>
								</div>
								<div className="buttons d-flex flex-row flex-wrap justify-content-around">
									{buttons}
								</div>
							</div>
							<div className="search-result hidden">
								<h3 className="search-result-title">РЕЗУЛЬТАТЫ ПОИСКА</h3>
								<div className="search-result-item">

								{ article ? <Link to={link} onClick={toggleSearch} className="mt-auto">
									<div className="article-preview d-flex flex-row">
										<div className="article-thumb">
											<img src={"http://localhost:1337" + article.cover.formats.thumbnail.url} />
										</div>
										<div className="article-preview-text d-flex flex-column">
											<p>{article.number}</p>
											<h3>{article.title}</h3>
											<h5>{article.subtitle}</h5>

										</div>

									</div></Link> : <h4>Записей не найдено</h4>
								}

								</div>
							</div>
						</div>
					</React.Fragment> : 
					<React.Fragment>
						<div className="footer-header d-flex flex-row justify-content-end pr-5 pl-5">
							<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
								<p>ТИХООКЕАНСКИЙ ФИЛИАЛ ФГБНУ "ВНИРО"</p>
							</div>
						</div>
					</React.Fragment>
				}
				</footer>
				
			</React.Fragment>
	    );
	}
}
