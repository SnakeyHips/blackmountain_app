import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import HelmetWrapper from "./Layout/HelmetWrapper";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Theme from "../styles/theme";
import "./App.css";

const history = createBrowserHistory();

history.listen(_ => {
  window.scrollTo(0, 0);
});

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
              <Route
                path="/products"
                exact
                render={() => {
                  return (
                    <HelmetWrapper title={`${title} - Products`} description={`What we sell at ${title}`}>
                      <Products />
                    </HelmetWrapper>
                  );
                }}
              />
            </Switch>
          </Main>
        </Router>
      </HelmetWrapper>
    </ThemeProvider>
  );
}
