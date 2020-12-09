import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



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
        return <p>loading...</p>
    } else {
        let rootId = "5fd0e2b10789a677dccc9883";
        const rootCategory = data.find(item => item.id === rootId);

        return (
            <>
                <section className="container">
                    <h3>{rootCategory.title}</h3>
                    <hr />
                    {rootCategory.subcategories.map(subCat => {
                        return (
                        <div key={subCat.id}>
                            <Link to={`${subCat.id}`}>
                                {data.find(cat => cat.id === subCat.id).title}
                            </Link>
                        </div>
                        );
                    })}
                </section>
            </>
        )
    }
}

export default Home;