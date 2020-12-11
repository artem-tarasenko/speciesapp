import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";


//============================================================================
//=========================   RENDER LEVEL 1 PAGE  ===========================
//==============================  CATEGORIES  ================================

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

function Home() {
    //getting starting data from mongo / API
    const data = useFetch("http://localhost:1337/categories");

    //short conditional to prevent the following code from executing before getting data from API
	//since it's based on data object
    if (!data) {
        return <section className="container"><p>Wait, loading...</p></section>
    } else {
        //setting up root categories to render 1st level with categories for 2 parts
		console.log(data);
        let firstPartTitle = "ТРОПИЧЕСКИЙ ЗАЛ";
        let secondPartTitle = "ДАЛЬНЕВОСТОЧНЫЙ ЗАЛ";
        const firstRootCategory = data.find(item => item.title === firstPartTitle);
        const secondRootCategory = data.find(item => item.title === secondPartTitle);

        //mapping through arrays with children categories to render each one as a component with props
        //params: url - for Router Link; category - a source object for component to work with
        return (
            <>
                <section className="container right">
                    <h3>{firstRootCategory.title}</h3>
                    <div className="d-flex d-row flex-wrap">
                        {firstRootCategory.subcategories.map(subCat =>
                            <CategoryItem key={subCat.id} url={subCat.id} category={subCat} />
                        )}
                    </div>
                </section>
                <section className="container left">
                    <h3>{secondRootCategory.title}</h3>
                    <div className="d-flex d-row flex-wrap">
                        {secondRootCategory.subcategories.map(subCat =>
                            <CategoryItem key={subCat.id} url={subCat.id} category={subCat} />
                        )}
                    </div>
                </section>
            </>
        )
    }
}

export default Home;
