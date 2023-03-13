import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import { Container } from "@mui/material";
import { Movie } from "../../types/movie";
import { CardWatchlistMovieProps } from "../../types/cardWatchlistMovieProps";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import Skeleton from "@mui/material/Skeleton";
import no_image from "../../assets/img/no_image.jpg";
import star from "../../assets/img/star.png";

export default function CardWatchlistMovie({
  watchlistStorage,
}: CardWatchlistMovieProps) {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState<Movie[]>();

  const classes = styles();

  useEffect(() => {
    setFilms(watchlistStorage);
  }, [watchlistStorage]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const removeFilmeWatchlist = (id: number) => {
    let removeId = films?.filter((_, index) => index !== id);
    setFilms(removeId);
    localStorage.setItem("Watchlist", JSON.stringify(removeId));
  };

  return (
    <>
      <Container maxWidth="xl">
        <div className={classes.containerCard}>
          {loading ? (
            <>
              {films?.map((filme) => (
                <Skeleton
                  sx={{
                    bgcolor: "rgba(32, 40, 62, 0.8)",
                    borderRadius: "12px",
                  }}
                  variant="rectangular"
                  width={282}
                  height={480}
                  key={filme.id}
                />
              ))}
            </>
          ) : (
            <>
              {films?.map((filme, index) => (
                <div className={classes.cardItem} key={filme.id}>
                  <img
                    className={classes.cardImg}
                    src={
                      filme.poster_path
                        ? "http://image.tmdb.org/t/p/w300/" + filme.poster_path
                        : no_image
                    }
                    alt="img-card-movie"
                  />
                  <div className={classes.containerButtons}>
                    <Link to={"/movie/" + filme.id} className={classes.link}>
                      <VisibilityIcon />
                    </Link>
                    <button
                      onClick={() => removeFilmeWatchlist(index)}
                      className={classes.link}
                    >
                      <DeleteIcon />
                    </button>
                  </div>

                  <div className={classes.cardStars}>
                    <img src={star} alt={star} />
                    <span className={classes.cardVote}>
                      {filme.vote_average}
                    </span>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </Container>
    </>
  );
}
