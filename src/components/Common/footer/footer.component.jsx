import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#2E3B55",
    maxHeight: 60,
  },
  Toolbar:{
    justifyContent: "center",
    alignItems: "center",
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Container maxWidth="xs">
        <Toolbar className={classes.Toolbar}>
          <p>&copy; {new Date().getFullYear()} - Jorge Valdes</p>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
