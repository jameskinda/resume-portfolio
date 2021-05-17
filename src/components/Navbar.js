import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import { mainImage } from "../data/appData";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: "15.625rem",
    background: theme.palette.drawer.main,
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: "6.5rem", //t
    height: "6.5rem",
  },
  listItem: {
    color: theme.palette.text.main,
  },
  arrow: {
    color: theme.palette.primary.main,
  },
  header: {
    color: theme.palette.text.main,
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact",
    listPath: "/contacts",
  },
];

const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () =>
    setState({ ...state, [slider]: open }); //the double arrow function not sure why he does it this way but it works, it is just a curried function, so this returns a function that returns a function with no parameters and just runs

  const sideList = (slider) => (
    <Box
      component="div"
      className={classes.menuSliderContainer}
      onClick={toggleSlider("right", false)}
    >
      <Avatar src={mainImage} alt="James Kinda" className={classes.avatar} />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={lsItem.listText}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar
          position="static"
          style={{
            background: "#222",
          }} /*this is called inLine Styles lets you edit these (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) this will edit CSS in element.Style. If we want to directy edit Mui defualt styles do above, here we just override them*/
        >
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" className={classes.header}>
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              open={state.right}
              anchor="right"
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
