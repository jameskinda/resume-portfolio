import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  Grid,
  Button,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import SentIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import { Alert } from "@material-ui/lab";
import Navbar from "./Navbar";
import { useForm } from "./useForm";
import Input from "./Input";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "40rem",
    minWidth: "16rem",
  },
  button: {
    marginTop: "1rem",
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
  header: {
    color: theme.palette.primary.main,
    textAlign: "center",
    textTransform: "uppercase",
  },
}));

const initialFValues = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contacts() {
  const [open, setOpen] = useState(false);

  const openNotify = () => {
    setOpen(true);
  };

  const closeNotify = () => {
    setOpen(false);
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues) {
      temp.fullName = fieldValues.fullName ? "" : "This field is required";
    }
    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "This field is required";
    }
    if ("subject" in fieldValues) {
      temp.subject = fieldValues.subject ? "" : "This field is required";
    }
    if ("message" in fieldValues) {
      temp.message = fieldValues.message ? "" : "This field is required";
    }
    if ((fieldValues == values) & (temp.email == "")) {
      temp.email = /$^|.+@.+..com+/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    }
    setErrors({ ...temp });
    if (fieldValues == values) {
      return Object.values(temp).every((x) => x == "");
    }
  };

  const { values, setValues, handleInputChange, errors, setErrors, resetForm } =
    useForm(initialFValues, true, validate);

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm(
          "service_yu8v0jr",
          "template_jrwpm4k",
          e.target,
          "user_a7OJG5ieweCF7DqA4ovWP"
        )
        .then((value) => {
          console.log(value);
        });
      openNotify();
      resetForm();
    }
  };

  const classes = useStyles();
  return (
    <Box component="div">
      <Navbar />
      <form onSubmit={sendEmail} autoComplete="off">
        <Grid container justify="center">
          <Box component="div" className={classes.form}>
            <Typography variant="h5" className={classes.header}>
              contact me...
            </Typography>
            <Input
              label="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
            />
            <br />
            <Input
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <br />
            <Input
              label="Subject"
              name="subject"
              value={values.subject}
              onChange={handleInputChange}
              error={errors.subject}
            />
            <br />
            <Input
              label="Message"
              name="message"
              value={values.message}
              onChange={handleInputChange}
              error={errors.message}
              multiline
            />
            <br />
            <Button
              autoComplete="new-password"
              type="submit"
              variant="outlined"
              fullWidth={true}
              endIcon={<SentIcon />}
              className={classes.button}
            >
              Send
            </Button>
          </Box>
        </Grid>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={closeNotify}
      >
        <Alert severity="success" variant="filled">
          Email sent!
        </Alert>
      </Snackbar>
    </Box>
  );
}
