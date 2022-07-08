import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <section>
      <div className="app">
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />

          <Redirect to="/" />
        </Switch>
        <Footer/>
      </div>
    </section>
  );
};
export default App;
