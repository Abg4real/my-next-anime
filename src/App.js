import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import Login from "./components/Login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Utilities/Theme/theme";
import Axios from "axios";
import Loading from "./components/Loading";
import Searchbar from "./components/Searchbar";

const API_LOCATION =
  "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1&genre_excluded=0";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  console.log(1);
  useEffect(() => {
    Axios.get(API_LOCATION)
      .then((res) => res.data)
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  function search(keyword) {
    if (keyword) {
      setLoading(true);
      fetch(
        `https://api.jikan.moe/v3/search/anime?q=${keyword}&page=1&genre_excluded=0`
      )
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        });
    }
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Searchbar loading={loading} search={search} />
              <Results loading={loading} data={results} />
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
