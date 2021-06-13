import React from "react";
import Result from "./Result";

export default function Results({ loading, data }) {
  return (
    <React.Fragment>
      <div className="result-section">
        {data.results.map((result) => {
          return <Result result={result} key={result.mal_id} />;
        })}
      </div>
    </React.Fragment>
  );
}
