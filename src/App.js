import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import Login from "./components/Login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Utilities/Theme/theme";
import Home from "./components/Home";

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/result/:title">
              <Details />
            </Route>
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}
