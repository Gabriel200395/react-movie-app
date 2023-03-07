import LOGO from "../../assets/img/logo.png";
import { AppBar, Toolbar, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
              <a href="" className={classes.link}>
                Movies
              </a>
            </li>
            <li className={classes.li}>
              <a href="" className={classes.link}>
                Now playing
              </a>
            </li>
            <li className={classes.li}>
              <a href="" className={classes.link}>
                Top rated
              </a>
            </li>
            <li className={classes.li}>
              <a href="" className={classes.link}>
                Upcoming
              </a>
            </li>
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
