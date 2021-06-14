import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const InputField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& label": {
      color: theme.palette.text.main,
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.text.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.text.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.text.main,
      },
      "& .MuiInputBase-input": {
        color: theme.palette.text.main,
      },
    },
  },
}))(TextField);

export default function Input(props) {
  const { name, label, value, error = null, onChange, ...other } = props;
  return (
    <InputField
      fullWidth={true}
      variant="outlined"
      margin="dense"
      size="medium"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
