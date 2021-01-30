import React, { useState } from "react";
import Loading from "./Loading";

export default function Searchbar({ loading, search }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    search(keyword);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter something to search"
            name="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            id="keyword"
          />
          <input type="submit" value="search" className="search" />
        </form>
      )}
    </>
  );
}
