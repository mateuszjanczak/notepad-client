import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import styled from "styled-components";
import store from "store";
import {routes} from "routes";
import Home from "views/Home";
import Notes from "views/Notes";
import Err404 from "views/Err404";
import GlobalStyle from "theme";
import Navbar from "components/organisms/Navbar";
import Footer from "components/organisms/Footer";

const Wrapper = styled.div`
  min-height: calc(100vh - 5rem);
`;

const App = () => {
  return (
      <Provider store={store}>
          <Router>
              <GlobalStyle />
              <Wrapper>
                  <Navbar/>
                  <Switch>
                      <Route exact path={routes.home} component={Home} />
                      <Route path={routes.notes} component={Notes} />
                      <Route component={Err404} />
                  </Switch>
              </Wrapper>
              <Footer/>
          </Router>
      </Provider>
  );
};

export default App;