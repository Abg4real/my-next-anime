import React from "react";
import Loading from "./Loading";
import Result from "./Result";

export default function Results({ loading, data }) {
  console.log(data);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <div className="result-section">
            {data.results.map((result) => {
              return <Result result={result} key={result.mal_id} />;
            })}
          </div>
        </React.Fragment>
      )}
    </>
  );
}
