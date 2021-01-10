import React, { useState } from "react";
import useFetchResults from "../Utilities/Hooks/useFetchResults";
import Loading from "./Loading";
import Result from "./Result";

export default function Results() {
  const [typingText, setTypingText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [results, errors, isLoading, setIsLoading] = useFetchResults(
    1,
    keyword
  );

  function ShowResults() {
    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="result-section">
          {results.map((result) => {
            return <Result result={result} key={result.mal_id} />;
          })}
        </div>
      );
    }
  }

  function handleSubmit() {
    setIsLoading(true);
    setKeyword(typingText);
  }

  return (
    <React.Fragment>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter something to search"
          name="keyword"
          value={typingText}
          onChange={(e) => setTypingText(e.target.value)}
          id="keyword"
        />
        <input
          type="submit"
          onSubmit={handleSubmit}
          onClick={handleSubmit}
          value="search"
          className="search"
        />
      </div>
      <ShowResults />
    </React.Fragment>
  );
}
