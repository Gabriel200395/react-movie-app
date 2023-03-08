import { Container } from "@mui/system";
import { styles } from "./styles";
import no_image from "../../assets/img/no_image.jpg";
import { cardPropsMovesId } from "../../types/cardPropsMovesId";

export default function CardMovesId({ cast }: cardPropsMovesId) {
  const classes = styles();

  return (
    <Container maxWidth="xl">
      <h3 className={classes.title3}>Actors</h3>

      <div className={classes.containerCard}>
        {cast?.map((item) => {
          return (
            <div key={item.id} className={classes.cardItem}>
              <img
                src={
                  item.profile_path
                    ? "http://image.tmdb.org/t/p/w154/" + item.profile_path
                    : no_image
                }
                className={classes.cardImg}
              />
              <h3 className={classes.cardText}>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
