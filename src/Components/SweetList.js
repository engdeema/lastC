import React from "react";
import sweetStore from "../Store/sweetStore";
import { observer } from "mobx-react";
import SweetItem from "./SweetItem";
import { Grid } from "@mui/material";

function SweetList() {
  const sweetList = sweetStore.sweets.map((sweet) => (
    <SweetItem key={sweet._id} sweet={sweet} />
  ));

  return (
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
  );
}

export default observer(SweetList);
