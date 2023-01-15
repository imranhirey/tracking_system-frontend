import { Grid } from "@mui/material";
import React from "react";
import AppListItems from "./Listitems";

const AppWrapper = ({children}) => {
  return (
    <Grid width="100vw" height="100vh" container direction="row">
      <Grid marginTop={11} item xs={2}>
        <AppListItems />
      </Grid>
      <Grid
        item
        xs={10}
        style={{
          margin:0,
          padding:0,
          height: "100vh",
          overflow: "hidden",
        }}
      >
       {children}
      </Grid>
    </Grid>
  );
};

export default AppWrapper;
