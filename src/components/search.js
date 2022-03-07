import React from "react";

const search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input onChange={inputHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default search;