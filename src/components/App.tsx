import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import HelmetWrapper from "./Layout/HelmetWrapper";
import Navigation from "./Layout/Navigation";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Theme from "../styles/theme";
import "./App.css";

const history = createBrowserHistory();

// Scroll to top on route change
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
          <Navigation>
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
                    <HelmetWrapper title={`${title} - Products`} description={`Products by ${title}`}>
                      <Products />
                    </HelmetWrapper>
                  );
                }}
              />
            </Switch>
          </Navigation>
        </Router>
      </HelmetWrapper>
    </ThemeProvider>
  );
}
