import { makeStyles } from "@mui/styles";

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
    fontWeight: "400px",
    fontSize: "14px",
    marginTop: "16px",
  },

  cardImg: {
    height: "400px",
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
    fontWeight: "400px",
    fontSize: "14px",
  },

  cardVote: {
    marginLeft: "5px",
  }, 

  containerButtons: {
    display:"flex", 
    justifyContent:"space-between", 
    alingItems: "center",
    marginTop: "20px"
  },

  link: {
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    color: "#ebeef5",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400px",
    fontSize: "14px",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    textDecoration:"none",
    padding:"10px 10px 10px 10px",
    border:"none",
    cursor: "pointer"
  }  
});
