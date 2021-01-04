import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
