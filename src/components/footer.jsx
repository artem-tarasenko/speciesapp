import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

function addSearchBehavior() {
	let x = document.querySelector(".search-btn");
	console.log(x);
	x.addEventListener("click", showSearch);
}

function showSearch(event) {
	console.log(event);
}

let inputValue;
const inputField = document.querySelector("#search-input");

function handleInput(event) {
	if (inputField.value.length < 3) {
		inputValue = inputField.value + event.target.id;
		inputField.value = inputValue;
	}
}

function clearSearch() {
	inputField.value = null;
}

export default function Footer() {
	const buttons = [];
	for (let i = 0; i < 10; ++i) {
		buttons.push(<button type="button" className="input-btn m-2" onClick={handleInput} id={i} value={i}><p class="label">{i}</p></button>)
	}

    return (
        <React.Fragment>
			<footer className="footer d-flex flex-column">
			<div className="footer-header d-flex flex-row justify-content-between pr-5 pl-5">
				<div className="search d-flex flex-row">
					<button className="search-btn" onLoad={addSearchBehavior}>
						<SearchIcon fontSize="large" /><h3>ПОИСК ПО НОМЕРУ</h3>
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
						<button className="clear-btn m-2"><p class="label">НАЙТИ</p></button>
						<button className="clear-btn m-2" onClick={clearSearch}><p class="label">ОЧИСТИТЬ</p></button>
					</div>
					<div className="buttons d-flex flex-row flex-wrap justify-conten-evenly">
						{buttons}
					</div>
				</div>
				<div className="search-result">
				<h3>РЕЗУЛЬТАТЫ ПОИСКА {inputValue}</h3>
				</div>
			</div>
			</footer>
		</React.Fragment>
    );
}
