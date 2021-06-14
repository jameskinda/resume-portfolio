import React, { useState } from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Collapse,
  IconButton,
  Chip,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

import { projects, cardExpansion } from "../data/appData";
import theme from "../theme/theme";

const useStyles = makeStyles({
  mainContainer: {
    background: theme.palette.background.main,
    height: "100%",
  },
  cardContainer: {
    maxWidth: "21.563rem",
    margin: "2rem auto",
  },
  description: {
    color: theme.palette.text.secondary,
  },
  button: {
    color: theme.palette.link.main,
    fontWeight: "550",
    fontSize: "0.875rem",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  descHeader: {
    margin: "0.313rem 0",
  },
  chip: {
    margin: "0.313rem",
  },
  chipHeader: { margin: "0.313rem 0" },
});

export default function Portfolio() {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(cardExpansion);

  const handleExpandClick = (id) => {
    setExpanded({ ...expanded, [id]: !expanded[id] });
  };

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />

      <Grid container justify="flex-start">
        {projects.map((project) => (
          <Grid item xs={12} md={6} xl={4} key={project.id}>
            <Card className={classes.cardContainer}>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project.image}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.description}
                >
                  {project.description}
                </Typography>
              </CardContent>

              <CardActions>
                {project.buttonOne && (
                  <Button
                    size="small"
                    href={project.gitLink}
                    target="_blank"
                    className={classes.button}
                  >
                    {project.buttonOne}
                  </Button>
                )}
                {project.buttonTwo && (
                  <Button
                    size="small"
                    href={project.appLink}
                    target="_blank"
                    className={classes.button}
                  >
                    {project.buttonTwo}
                  </Button>
                )}
                <Box style={{ flexGrow: "1" }}></Box>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded[project.id],
                  })}
                  onClick={() => handleExpandClick(project.id)}
                  aria-expanded={expanded[project.id]}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded[project.id]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography className={classes.chipHeader} variant="body1">
                    Main Tech used:
                  </Typography>
                  <Box>
                    {project.chips.map((chip) => {
                      return (
                        <Chip
                          className={classes.chip}
                          key={chip.id}
                          label={chip.skill}
                          color="primary"
                        />
                      );
                    })}
                  </Box>
                  {project.longDescription && (
                    <Box>
                      <Typography
                        className={classes.descHeader}
                        variant="body1"
                      >
                        Description:
                      </Typography>
                      <Typography variant="body2">
                        {project.longDescription}
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
