import React from "react";
import "./App.css";
import Home from "./components/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.main,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </div>
  );
}

export default App;
