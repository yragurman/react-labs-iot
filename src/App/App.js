import React from "react";
import Header from "../containers/Header/Header.js";
import Footer from "../containers/Footer/Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Catalog from "../Catalog/MainCatalog/Catalog.js";
import Cart from "../Cart/Cart.js";
import Home from "../Home/Home.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
