import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "#4A2C2A",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 40px",
    marginBottom: "50px"
  },
  typographyStyles: {
    flex: 1
  },
  header: {
    marginBottom: "50px",
    backgroundColor: "transparent",
    boxShadow: "none"
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar className={classes.root}>
        <Typography className={classes.typographyStyles}>
          Great Coffee Machines on Amazon.com
        </Typography>
        <LocalCafeIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
