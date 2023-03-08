import { styles } from "./styles";
import star from "../../assets/img/star.png";
import { MovieDetailsProps } from "../../types/movieDetails";
import { Typography, Container, Box, Grid } from "@mui/material";
import { textData } from "../../utils/textDataMovieId,";
import { dataItems } from "../../helpers/textsMovies";

export default function MovieDetails({ data }: MovieDetailsProps) {
  const classes = styles();
  return (
    <Container>
      <Box className={classes.containerDetails}>
        <Grid>
          <img
            src={data?.poster_path && "http://image.tmdb.org/t/p/w780/" + data?.poster_path}
            alt="img"
            className={classes.img}
          />
        </Grid>

        <Grid>
          <Typography variant="h5" className={classes.subTitle}>
            Part of the journey is the end.
          </Typography>
          <Typography className={classes.text}>{data?.overview}</Typography>
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
        </Grid>
      </Box>
    </Container>
  );
}
