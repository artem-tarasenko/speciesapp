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
	const [link, setLink] = useState([]);
	const [value, setValue] = useState("0");
	const [article, setArticle] = useState({});

	const catData = useFetch("http://localhost:1337/categories");
	const data = useFetch("http://localhost:1337/articles");

//==============================================================================
	function toggleSearch(event) {
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
	}
//==============================================================================
	function InitSearch(data) {
		//props from calling function - data (all articles array)
		const resultTitle = document.querySelector(".search-result-title");

		//updating search result title to show what has been searched for
		resultTitle.innerText = `РЕЗУЛЬТАТЫ ПОИСКА - "${value}"`;
		ClearSearch();

		//show block with articles preview
		document.querySelector(".search-result").classList.remove("hidden");

		//search for an articles
		setValue(lastValue => "D" + lastValue);
		setArticle(data.find( item => item.number === value ));
		console.group("debug search");
		console.log(value);
		console.log(article);
		console.groupEnd();
	}
//==============================================================================
	function handleInput(event) {
		//find and store input field that will show user input from buttons
		const inputField = document.querySelector("#search-input");

		//setting limit "3" to number input and updating input value with button clicks
		if (value.length < 4) {
			setValue(inputField.value + event.target.id);
			inputField.value = value;
			console.groupCollapsed("handleInput function")
			console.log("value still less then <3, adding value...");
			console.log(value);
		} else {
			//clean input field or block input
		}
	}
//==============================================================================
	function ClearSearch() {
		//find and store input field that will show user input from buttons
		//find and store resulting title object to modify text
		const inputField = document.querySelector("#search-input"); //obj
		document.querySelector(".search-result").classList.add("hidden");
		setValue("");
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


	    return (
	        <React.Fragment>
				<footer className="footer d-flex flex-column">
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
							<h3>title testing</h3>


						</div>

					</div>
				</div>
				</footer>
			</React.Fragment>
	    );
	}
}
// <Link to={link} >LINK</Link>
//{foundArticle && <RenderArticlePreview article={ () => foundArticle } gallery={false} />}



// {foundArticle.hasOwnProperty("title") && <div className="article-preview d-flex flex-row">
// 		<div className="article-thumb">
// 			<img src={"http://localhost:1337" + foundArticle.cover.formats.thumbnail.url} />
// 		</div>
// 		<div className="article-preview-text d-flex flex-column">
// 			<p>{foundArticle.number}</p>
// 			<h3>{foundArticle.title}</h3>
// 			<h5>{foundArticle.subtitle}</h5>
// 		</div>
// 	</div>
// }
