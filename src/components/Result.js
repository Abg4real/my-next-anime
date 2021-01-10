import React, { useEffect, useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Result({ result }) {
  const [title, setTitle] = useState("");
  useEffect(() => {
    let title_string = result.title;
    title_string = title_string.split(" ").join("+");
    setTitle(title_string);
  }, [result.title]);
  return (
    <div className="result">
      <Link to={`/result/${title}`} style={{ textDecoration: "none" }}>
        <div className="img">
          <img id="image" src={result.image_url} alt={result.title} />
          <div className="hover-content" id="hover-content">
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#2ec4b6" }}
              size="2x"
            />
            <span>Rating</span>
            <span>{result.score}/10</span>
          </div>
        </div>
        <p
          onClick={(e) => {
            console.log(e.target.parentNode.dataset.id);
          }}
        >
          <span>{result.title}</span>
        </p>
      </Link>
    </div>
  );
}
