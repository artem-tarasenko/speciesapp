import React , {useState} from "react";
import SingleArticle from "./modules/singleArticle";
import TempArticles from "./assets/tempArticles";




function ArticlesList() {
	const [isChoosen, setIsChoosen] = useState(false);

	function articleIsChoosen(state) {
		console.log("ArticleList module state now: " + isChoosen);
		setIsChoosen(state);
	}

	return (
        <main role="main" className="col-xl-9 mb-5">
	        <div className="container-fluid">
	            <div className="d-flex flex-column align-items-start">
	                <h3>Список всех статей</h3>
	                <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
	                <hr />
					<p id="monitor">none</p>
	                <nav className="navbar navbar-light bg-light col-md-12">
	                    <form className="form-inline">
	                        <input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
	                    </form>
	                </nav>
	                <div className="list-group-flush col-md-12">
						{TempArticles.map(article => {
							return	<SingleArticle key={article.key} title={article.title} handleClick={articleIsChoosen}/>
							})
						}
	                </div>
					<div className="clearfix"></div>
	            </div>
	        </div>
        </main>
	)
}

export default ArticlesList;
