import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {routes} from "routes";
import Home from "views/Home";
import Notes from "views/Notes";
import SingleNote from "views/SingleNote";
import Err404 from "views/Err404";
import GlobalStyle from "theme";
import Navbar from "components/organisms/Navbar";

const App = () => {
  return (
      <Router>
          <GlobalStyle />
          <Navbar/>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route exact path={routes.notes} component={Notes} />
            <Route exact path={routes.singleNote} component={SingleNote} />
            <Route component={Err404} />
          </Switch>
      </Router>
  );
};

export default App;
