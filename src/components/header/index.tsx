import { AppBar, Toolbar, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from "./styles";
import { Links } from "../../helpers/links"; 
import LOGO from "../../assets/img/logo.png";


export default function Header() {
  const classes = styles();

  return (
    <AppBar className={classes.bar} position="relative">
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <img src={LOGO} alt={LOGO} />
          </Link>

          <ul className={classes.ul}>
            {Links.map(({ link, text }, index) => {
              return (
                <li className={classes.li} key={index}>
                  <Link to={link} className={classes.link}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
