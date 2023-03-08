import { makeStyles } from "@mui/styles";

export const styles = makeStyles({
    containerCard: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(282px, 282px))",
      gridGap: "30px 30px",
      justifyContent: "center",
      backgroundColor: "transparent",
      paddingBottom: "60px",
    },
  
    cardItem: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      height: "200px",
      borderRadius: "5px",
      position: "relative",
      backgroundColor: "rgba(32, 40, 62, 0.8)",
    },
  
    cardImg: {
      height: "100%",
    },
  
    cardText: {
      color: "#ebeef5",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "400",
      fontSize: "16px",
      paddingLeft: "20px",
    },
  
    title3: {
      color: "#ebeef5",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "400",
      fontSize: "35px",
      marginTop: "60px",
      marginBottom: "30px",
    },
  });
  