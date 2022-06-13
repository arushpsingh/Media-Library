import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
      margin: useTheme().spacing(1),
    },
  },

  paper: {
    // padding: theme.spacing(2),
    padding: useTheme().spacing(4),
  },

  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  fileInput: {
    width: "97%",
    margin: "10px 0",
  },

  buttonSubmit: {
    marginBottom: 10,
  },
}));
