import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import styled from "styled-components";
import {routes} from "routes";
import Home from "views/Home";
import Notes from "views/Notes";
import SingleNote from "views/SingleNote";
import Err404 from "views/Err404";
import GlobalStyle from "theme";
import Navbar from "components/organisms/Navbar";
import Footer from "./components/organisms/Footer";

const Wrapper = styled.div`
  min-height: calc(100vh - 5rem);
`;

const App = () => {
  return (
      <Router>
          <GlobalStyle />
          <Wrapper>
              <Navbar/>
              <Switch>
                  <Route exact path={routes.home} component={Home} />
                  <Route exact path={routes.notes} component={Notes} />
                  <Route exact path={routes.singleNote} component={SingleNote} />
                  <Route component={Err404} />
              </Switch>
          </Wrapper>
          <Footer/>
      </Router>
  );
};

export default App;
