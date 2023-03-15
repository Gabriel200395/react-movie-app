import { styles } from "./styles";
import { MovieDetailsProps } from "../../types/movieDetails";
import { Typography, Container, Box, Grid, Button } from "@mui/material";
import { textData } from "../../utils/textDataMovieId,";
import { dataItems } from "../../helpers/textsMovies";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import star from "../../assets/img/star.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import no_image from "../../assets/img/no_image.jpg";

export default function MovieDetails({ data }: MovieDetailsProps) {
  const classes = styles();
  const [watchlist, setWatchlist] = useLocalStorage("Watchlist", []);

  let FilmeDuplicate = new Set();

  const handleClickAddWatchlist = () =>
    setWatchlist(
      [...watchlist, data].filter((item: any) => {
        const duplicates = FilmeDuplicate.has(item.id);

        FilmeDuplicate.add(item.id);
        return !duplicates;
      })
    );

  return (
    <Container>
      <Box className={classes.containerDetails}>
        <Grid>
          <img
            src={
              data?.poster_path
                ? "http://image.tmdb.org/t/p/w780/" + data?.poster_path
                : no_image
            }
            alt="img"
            className={classes.img}
          />
        </Grid>

        <Grid>
          <Typography variant="h5" className={classes.subTitle}>
            Part of the journey is the end.
          </Typography>
          <Typography
            sx={{ mt: 1, mb: 3 }}
            variant="subtitle1"
            className={classes.text}
          >
            {data?.overview}
          </Typography>
          <Grid className={classes.stars}>
            <img src={star} alt={star} />
            <span className={classes.vote}>{data?.vote_average}</span>
          </Grid>
          {dataItems.map((item, index) => {
            return (
              <Grid
                className={classes.spacing}
                key={index}
                sx={{ flexDirection: "column", display: "flex" }}
              >
                <span className={classes.textType}>{item.title}</span>
                <span className={classes.textMovie}>
                  {item.type ? textData(item.type, data) : item.text}
                </span>
              </Grid>
            );
          })}

          <Button className={classes.button} onClick={handleClickAddWatchlist}>
            <AddCircleIcon /> <span className={classes.span}>Watchlist</span>
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}
