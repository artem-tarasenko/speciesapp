import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function toggleSearch(event) {
	let footer = document.querySelector(".footer");
	let body = document.querySelector("#root");
	let buttonTitle = document.querySelector(".search-title");
	let title = buttonTitle.innerText
	let buttonIcons = document.querySelectorAll(".search-icon");

	body.classList.toggle("shadow");
	footer.classList.toggle("closed");
	buttonIcons.forEach(item => item.classList.toggle("hidden"));
	
	if (title === "ПОИСК ПО НОМЕРУ") {
		buttonTitle.innerText = "ЗАКРЫТЬ";
	} else {
		buttonTitle.innerText = "ПОИСК ПО НОМЕРУ";
	}
	


}

let inputValue = 0;

function handleInput(event) {
	const inputField = document.querySelector("#search-input");
	const resultTitle = document.querySelector(".search-result-title");

	if (inputField.value.length < 3) {
		inputValue = inputField.value + event.target.id;
		inputField.value = inputValue;
		resultTitle.innerText = `РЕЗУЛЬТАТЫ ПОИСКА - "${inputValue}"`;
	}
}

function clearSearch() {
	const inputField = document.querySelector("#search-input");
	inputField.value = null;
}

export default function Footer() {
	const buttons = [];
	for (let i = 0; i < 10; ++i) {
		buttons.push(<button type="button" className="input-btn m-2" onClick={handleInput} id={i} value={i}>
			<p className="label">{i}</p>
			</button>)}

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
						<button className="clear-btn m-2"><p className="label">НАЙТИ</p></button>
						<button className="clear-btn m-2" onClick={clearSearch}><p className="label">ОЧИСТИТЬ</p></button>
					</div>
					<div className="buttons d-flex flex-row flex-wrap justify-content-around">
						{buttons}
					</div>
				</div>
				<div className="search-result">
					<h3 className="search-result-title">РЕЗУЛЬТАТЫ ПОИСКА - "{inputValue}"</h3>
					<div className="search-result-item">
						<h3>TITLE</h3>
						<h5>Subtitle latin</h5>
						<p>image</p>
					</div>
				</div>
			</div>
			</footer>
		</React.Fragment>
    );
}
