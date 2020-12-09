import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Categories from "./components/TestRouting";



export default function App() {
  return (
	<React.Fragment>
        <Header />
        <Categories />
        <Footer />
    </React.Fragment>
  )
}