import Axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Results from "./Results";
import Searchbar from "./Searchbar";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);
  const [results, setResults] = useState([]);
  useEffect(() => {
    let uri = "";
    if (search != null) {
      uri = `${process.env.REACT_APP_API_LOCATION}/anime?q=${search}&page=1&genre_excluded=0`;
    } else {
      uri = `${process.env.REACT_APP_API_LOCATION}/anime?q=&order_by=members&sort=desc&page=1&genre_excluded=0`;
    }
    setLoading(true);
    Axios.get(uri)
      .then((res) => res.data)
      .then((data) => {
        setResults(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [search]);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <Searchbar search={search} setSearch={setSearch} />
      {loading ? <Loading /> : <Results data={results} />}
    </div>
  );
}
