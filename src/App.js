import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {ContentRouting as Content} from "./components/ContentRouting";


export default function App() {
  return (
	<React.Fragment>
        <Header />
        <Content />
        <Footer />
    </React.Fragment>
  )
}
