import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  cardMedia,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
} from "@material-ui/core";
import Navbar from "./Navbar";
import GetAppIcon from "@material-ui/icons/GetApp";
import { resume } from "../data/appData";
import { resume_description } from "../data/appData";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.background.main,
  },
  resumeContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  button: {
    marginTop: "1rem",
    borderColor: "#73CCA8",
    marginTop: "0",
  },
  aboutMe: { margin: "3.125rem", padding: "0.625rem" },
  image: {
    height: "12.5rem",
    width: "auto",
    float: "left",
    margin: "0 1rem 1rem 0",
  },
  cardAction: {
    padding: "0 1rem 1rem 1rem",
  },
}));

export default function Resume() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={10} xl={6}>
          <Card className={classes.aboutMe}>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <img src={resume.photo} className={classes.image} />
                </Grid>
                <Grid item xs={12}>
                  {resume.description()}
                </Grid>
              </Grid>
            </CardContent>
            <CardActions className={classes.cardAction}>
              <Button
                color="primary"
                disableElevation
                variant="contained"
                endIcon={<GetAppIcon />}
                className={classes.button}
                href={resume.pdf}
                target="_blank"
              >
                Download Resume
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
