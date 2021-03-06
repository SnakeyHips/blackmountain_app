import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import HelmetWrapper from "./Layout/HelmetWrapper";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
// import Reviews from "./Pages/Reviews";
import Theme from "../styles/theme";
import "./App.css";

const history = createBrowserHistory();

export default function App() {
  const title: string = "Black Mountains CBD";

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <HelmetWrapper title={title} description={`${title}`}>
        <Router history={history}>
          <Main>
            <Switch>
              <Route
                path="/"
                exact
                render={() => {
                  return (
                    <HelmetWrapper title={`${title}`} description={`${title}`}>
                      <Home />
                    </HelmetWrapper>
                  );
                }}
              />
              {/* <Route
                path="/reviews"
                exact
                render={() => {
                  return (
                    <HelmetWrapper title={`${title} - Reviews`} description={`Reviews from ${title}`}>
                      <Reviews />
                    </HelmetWrapper>
                  );
                }}
              /> */}
            </Switch>
          </Main>
        </Router>
      </HelmetWrapper>
    </ThemeProvider>
  );
}
