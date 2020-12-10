import React, { useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";


//============================================================================
//=========================   RENDER LEVEL 1 PAGE  ===========================
//==============================  CATEGORIES  ================================

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

    const data = useFetch("http://localhost:1337/categories");

     if (!data) {
        return <section className="container"><p>Wait, loading...</p></section>
    } else {
        let firstPartTitle = "ТРОПИЧЕСКИЙ ЗАЛ";
        let secondPartTitle = "ДАЛЬНЕВОСТОЧНЫЙ ЗАЛ";
        const firstRootCategory = data.find(item => item.title === firstPartTitle);
        const secondRootCategory = data.find(item => item.title === secondPartTitle);

        return (
            <>
                <section className="container">
                    <h3>{firstRootCategory.title}</h3>
                    <hr />
                    <div className="d-flex d-row flex-wrap">
                        {firstRootCategory.subcategories.map(subCat => <CategoryItem key={subCat.id} url={subCat.id} category={subCat} /> )}
                    </div>
                </section>
                <section className="container">
                    <h3>{secondRootCategory.title}</h3>
                    <hr />
                    <div className="d-flex d-row flex-wrap">
                        {secondRootCategory.subcategories.map(subCat => <CategoryItem key={subCat.id} url={subCat.id} category={subCat} /> )}
                    </div>
                </section>
            </>
        )
    }
}

export default Home;
