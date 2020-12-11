import React from "react";
import SearchIcon from '@material-ui/icons/Search';

export default function Footer() {
    return (
        <React.Fragment>

			<footer className="footer d-flex justify-content-between pr-5 pl-5">
				<div className="search d-flex flex-row">
					<SearchIcon fontSize="large" /><h3>ПОИСК ПО НОМЕРУ</h3>
				</div>
				<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
					<p>ТИХООКЕАНСКИЙ ФИЛИАЛ ФГБНУ "ВНИРО"</p>
				</div>
			</footer>
		</React.Fragment>
    );
}
