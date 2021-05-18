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
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
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
            "Web Development",
            "FERN Stack",
            "CPA (pending approval)",
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
