import React, { useState } from "react";
import sweetStore from "../Store/sweetStore";
import { observer } from "mobx-react";
import SweetItem from "./SweetItem";
import { Grid } from "@mui/material";
import SearchBar from "./SearchBar";

function SweetList() {
  const [query, setQuery] = useState("");

  const sweetList = sweetStore.sweets
    .filter((sweet) => sweet.name.toLowerCase().includes(query))
    .map((sweet) => {
      return <SweetItem key={sweet._id} sweet={sweet} />;
    });

  return (
    <div>
      <SearchBar setQuery={setQuery} />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {sweetList}
      </Grid>
    </div>
  );
}

export default observer(SweetList);
