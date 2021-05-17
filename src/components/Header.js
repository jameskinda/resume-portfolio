import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar, Typography, Box } from "@material-ui/core";
import Typed from "react-typed";
import { mainImage } from "../data/appData";

//JSS Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: theme.palette.primary.main,
  },
  subtitle: {
    color: theme.palette.text.main,
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute", //this property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky). absolute will take things out of the flow of the document. It becomes relatvie to the parent element that has psoition set to relatvive, if none do then it is relative to the body
    top: "50%", //it is 50% of the page away from the top
    left: "50%",
    transform: "translate(-50%, -50%)", //the first number specifies the x axists and second y axis. positive is right (up) and negtive is left (down), these numbers are relative to their width and hight
    width: "100vw", //A percentage of the full viewport width. 1vw is 1% of the entire width of the screen. (this is based on screen size, where percetnages are based on its parent)
    textAlign: "center", //The text-align property specifies the horizontal alignment of text in an element. This makes the text be in the center
    zIndex: 1, //specifies the stack order of an element.
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar src={mainImage} alt="James Kinda" className={classes.avatar} />
      </Grid>
      <Typography variant="h4" className={classes.title}>
        <Typed strings={["James Kinda"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography variant="h4" className={classes.subtitle}>
        <Typed
          strings={[
            "Web Design",
            "Web Devepment",
            "FERN Stack",
            "CPA (pending board approval)",
            "Capital Market Specialist",
            "Data Science",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
}

export default Header;
