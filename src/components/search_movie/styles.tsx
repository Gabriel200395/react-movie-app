import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";

export const styles = makeStyles({
  icon: {
    position: "absolute",
    top: "15px",
    left: "15px",
    color: "#475069",
    fontSize: "40px",
  },

  container: {
    backgroundColor: "transparent",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "40px",
  },

  containerField: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

