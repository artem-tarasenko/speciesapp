import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
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
