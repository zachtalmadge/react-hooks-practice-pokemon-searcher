import React from "react";

function Search({ onSetSearch }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={onSetSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
