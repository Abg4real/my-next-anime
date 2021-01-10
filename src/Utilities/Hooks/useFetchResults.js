import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchResults(page, keyword) {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetch() {
    if (keyword === "") {
      axios
        .get(
          "https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1&genre_excluded=0"
        )
        .then((res) => {
          setResults(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setErrors(["Unable to fetch data"]);
          setIsLoading(false);
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://api.jikan.moe/v3/search/anime?q=${keyword}&order_by=members&sort=desc&page=1&genre_excluded=0`
        )
        .then((res) => {
          setResults(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setErrors(["Unable to fetch data"]);
          setIsLoading(false);
          console.log(err);
        });
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetch();
  }, [page, keyword]);

  return [results, errors, isLoading, setIsLoading];
}
