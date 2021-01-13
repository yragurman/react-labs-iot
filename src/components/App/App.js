import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home";
import Catalog from "../Catalog";
import Cart from "../Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/cart" component={Cart}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
