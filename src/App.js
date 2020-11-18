import React from "react";
import './App.css';
import './components/assets/css/dashboard.css';
import './components/assets/css/appStyles.css';
import "./components/assets/css/form-validation.css";
// import "./components/assets/css/treemenu.css";
import AdminPanel from "./components/adminPanel";
import Body from "./components/adminPanelPartials/body";
import AdminHeader from "./components/adminPanelPartials/adminHeader";
import ArticlesList from "./components/adminPanelPartials/articlesList";



export default function App() {
  return (
	<React.Fragment>
	  <AdminHeader />
	  <AdminPanel />
	</React.Fragment>
  );
}
