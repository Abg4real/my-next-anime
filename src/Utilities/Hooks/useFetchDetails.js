import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchDetails(title) {
  const [details, setDetails] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetch() {
    if (!title) {
      setErrors(["Unable to find the details"]);
    } else {
      axios
        .get(
          `https://api.jikan.moe/v3/search/anime?q=${title}&page=1&genre_exclude=0`
        )
        .then((res) => {
          let result = res.data.results;
          let title_string = title.split("+").join(" ");
          result = result.filter(function (result) {
            return (result.title = title_string);
          });
          setDetails(result[0]);
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
  }, [title]);

  return [details, errors, isLoading, setIsLoading];
}
