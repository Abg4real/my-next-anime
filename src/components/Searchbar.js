import React, { useState } from "react";

export default function Searchbar({ search, setSearch }) {
  const [keyword, setKeyword] = useState(search ? search : "");

  const handleSubmit = (e) => {
    console.log(1);
    e.preventDefault();
    setSearch(keyword);
  };
  return (
    <>
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
    </>
  );
}
