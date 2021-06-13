import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

export default function Details() {
  const { title } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (title) {
      setLoading(true);
      const uri = `https://api.jikan.moe/v3/search/anime?q=${title}&page=1&genre_exclude=0`;
      console.log(uri);
      fetch(uri)
        .then((res) => res.json())
        .then((res) => {
          let result = res.results;
          result = result.filter(function (result) {
            return (result.title = title);
          });
          setDetails(result[0]);
          setLoading(false);
          console.log(3);
        })
        .catch((err) => {
          setError(["Unable to fetch data"]);
          console.error(err);
          setLoading(false);
        });
    }
  }, [title]);

  return loading ? (
    <Loading />
  ) : (
    <div className="details-section">
      <div className="left-section">
        <div className="img">
          <img src={details.image_url} alt={`${details.title} poster`} />
          <a className="link" href={details.url}>
            <FontAwesomeIcon icon={faPlay} />
            &nbsp;Watch Now
          </a>
        </div>
      </div>
      <div className="right-section">
        <div className="heading">
          <p className="name">{details.title}</p>
          <p className="genre">
            {details.rated}/{details.type}
          </p>
          <p className="score">
            <FontAwesomeIcon icon={faStar} style={{ color: "2ec4b6" }} />
            &nbsp;&nbsp;&nbsp;{details.score}/10
          </p>
        </div>
        <div className="synopsis">
          <p>
            <strong>Synopsis: </strong>
            {details.synopsis}
          </p>
        </div>
      </div>
    </div>
  );
}
