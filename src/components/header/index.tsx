import LOGO from "../../assets/img/logo.png";
import { AppBar, Toolbar, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

export default function Header() {
  const useStyles = makeStyles({
    ul: {
      display: "flex",
      listStyle: "none",
    },
    li: {
      marginRight: "16px",
      textDecoration: "none",
      fontFamily: "Poppins , sans-serif",
      fontWeight: "600",
      fontSize: "15px",
    },

    link: {
      textDecoration: "none",
      color: "#A8AEBF",
    },
  });

  const classes = useStyles();

  return (
    <AppBar
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80px",
        backgroundColor: "#121829", 
        marginBottom:"40px"
      }}
      position="relative"
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={LOGO} alt={LOGO} />
          <ul className={classes.ul}>
            <li className={classes.li}>
              <Link to="/" className={classes.link}>
                Movies
              </Link>
            </li>
            <li className={classes.li}>
              <Link to="/now-playing" className={classes.link}>
                Now playing
              </Link>
            </li>
            <li className={classes.li}>
              <Link to="/top-rated" className={classes.link}>
                Top rated
              </Link>
            </li>
            <li className={classes.li}>
              <Link to="/upcoming" className={classes.link}>
                Upcoming
              </Link>
            </li>
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
