import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetchDetails from "../Utilities/Hooks/useFetchDetails";
import Loading from "./Loading";

export default function Details() {
  const { title } = useParams();
  const [details, errors, isLoading, setIsLoading] = useFetchDetails(title);

  if (isLoading) return <Loading />;

  return (
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
