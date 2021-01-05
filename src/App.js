import React from "react";
import "./styles.css";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

export default function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={1} sm={2}></Grid>
        <Grid item xs={10} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={1} sm={2}></Grid>
      </Grid>
    </Grid>
  );
}
