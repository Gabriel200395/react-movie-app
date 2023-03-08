import { makeStyles } from "@mui/styles";

export const styles = makeStyles({
  container: {
    position: "relative",
    backgroundSize: "cover",
    height: "480px",
    borderRadius: "40px",
    width: "1200px",
  },

  containerTitle: {
    position: "absolute",
    backgroundColor: "rgba(32, 40, 62, 0.8)",
    backdropFilter: "blur(12px)",
    borderRadius: "24px",
    width: "560px",
    height: "144px",
    bottom: "-57px",
    left: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    fontSize: "32px",
    color: "#EBEEF5",
  },
});
