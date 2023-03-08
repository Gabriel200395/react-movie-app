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

export const SearchField = styled("div")({
  width: "600px",
  height: "60px",
  position: "relative",
});
export const Field = styled("input")({
  position: "relative",
  outline: "none",
  backgroundColor: "transparent",
  paddingLeft: "80px",
  height: "100%",
  width: "500px",
  color: "#475069",
  fontSize: "35px",
  borderRadius: "5px",
  border: "solid 1px #475069",
  fontFamily: "Poppins , sans-serif",
  fontWeight: "400",
});
