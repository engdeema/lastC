import React from "react";
import { observer } from "mobx-react-lite";

function SearchBar({ setQuery }) {
  return (
    <div style={{ justifyContent: "end" }}>
      <input
        style={{ width: "25%" }}
        type="search"
        placeholder="Search for your product"
        aria-label="Search"
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
}

export default observer(SearchBar);
