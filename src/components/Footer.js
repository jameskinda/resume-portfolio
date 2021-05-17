import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { socialMediaLinks } from "../data/appData";

const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: theme.palette.text.main,
      "&:hover": {
        fill: theme.palette.primary.main,
        fontSize: "1.8rem",
      },
    },
  },
  bar: {
    background: theme.palette.appbar.main,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" className={classes.bar}>
      <BottomNavigationAction
        style={{ padding: 0 }}
        icon={<LinkedInIcon />}
        className={classes.root}
        href={socialMediaLinks.linkedIn}
        target="_blank"
      />
      <BottomNavigationAction
        style={{ padding: 0 }}
        icon={<GitHubIcon />}
        className={classes.root}
        href={socialMediaLinks.gitHub}
        target="_blank"
      />
    </BottomNavigation>
  );
}
