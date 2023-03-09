import { makeStyles } from "@mui/styles";

export const styles = makeStyles({
  containerDetails: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "120px", 
    flexWrap:"wrap"
  },

  text: {
    width: "480px",
    height: "224px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "32px",
    color: "#8E95A9",
    marginBottom: "80px", 

    '@media (max-width: 768px)' : {
      fontSize: "16px", 
      width:"100%", 
      paddingBottom:"80px"
    }
  },
  subTitle: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
    fontSize: "24px",
    color: "#EBEEF5",
  },

  img: {
    borderRadius: "24px",
    height: "780px", 

    '@media (max-width: 768px)' : {
      fontSize: "16px", 
      height: "300px",
      marginBottom: "30px"

    }
  },
  textType: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    fontSize: "14px",
    color: "#767E94",
    marginBottom: "5",
  },

  textMovie: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    fontSize: "16px",
    color: "#C3C8D4",
  },

  stars: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
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
    marginBottom: "24px", 
  },

  vote: {
    marginLeft: "5px",
  },

  spacing: {
    marginBottom: "24px",
  },
});
