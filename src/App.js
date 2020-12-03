import React from "react";
import Header from "./components/appPartials/header";
import Footer from "./components/appPartials/footer";
import Categories from "./components/appPartials/mainPageRouting";


export default function App() {
  return (
	<React.Fragment>
        <Header />
        <Categories />
        <Footer />
    </React.Fragment>
  )
}