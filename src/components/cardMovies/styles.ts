import { makeStyles } from "@mui/styles";
import { minHeight } from "@mui/system";

export const styles = makeStyles({
  stack: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
    backgroundColor: "rgba(32, 40, 62, 0.8)",
    margin: "40px 0px 40px 0px",
    width: "100%",
  },

  containerCard: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(282px, 282px))",
    gridGap: "30px 30px",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: "100%",
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    height: "480px",
    borderRadius: "12px",
    padding: "8px 8px 8px",
    position: "relative",
    backgroundColor: "rgba(32, 40, 62, 0.8)",
    textDecoration: "none",
  },

  cardText: {
    color: "#ebeef5",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    fontSize: "14px",
    marginTop: "16px",
  },

  cardImg: {
    height: "400",
    width: "266px",
    borderRadius: "8px",
  },

  cardStars: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    position: "absolute",
    top: "15px",
    left: "15px",
    right: "0px",
    color: "#ffad49",
    width: "100%",
    maxWidth: "70px",
    height: "30px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    fontSize: "14px",
  },

  cardVote: {
    marginLeft: "5px",
  },

  container: {
    height: "100%",
  },
});
