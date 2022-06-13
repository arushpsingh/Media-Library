import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },

  smMargin: {
    // margin: theme.spacing(1),
    margin: useTheme().spacing(1),
  },

  actionDiv: {
    textAlign: "center",
  },
}));
