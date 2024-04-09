import React from "react";
import Header from "./components/common/header/Header";

import Homepages from "./components/home/Homepages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepages} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
