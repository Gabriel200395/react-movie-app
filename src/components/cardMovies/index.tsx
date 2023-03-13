import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import { Pagination, Stack, Container } from "@mui/material"; 
import Skeleton from "@mui/material/Skeleton";
import no_image from "../../assets/img/no_image.jpg";
import star from "../../assets/img/star.png";
import { MoviesProps } from "../../types/cardMovies";

export default function CardMovies({
  page,
  onChange,
  moviesData,
}: MoviesProps) {
  const [loading, setLoading] = useState(true);

  const classes = styles();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []); 
  
  return (
    <>
      <Container maxWidth="xl">
        <div className={classes.containerCard}>
          {loading ? (
            <>
              {moviesData?.results.map((filme) => (
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
              {moviesData?.results.map((filme) => (
                <Link
                  to={"/movie/" + filme.id}
                  className={classes.cardItem}
                  key={filme.id}
                >
                  <img
                    className={classes.cardImg}
                    src={
                      filme.poster_path
                        ? "http://image.tmdb.org/t/p/w300/" + filme.poster_path
                        : no_image
                    }
                    alt="img-card-movie"
                  />
                  <p className={classes.cardText}>{filme.title}</p>
                  <div className={classes.cardStars}>
                    <img src={star} alt={star} />
                    <span className={classes.cardVote}>
                      {filme.vote_average}
                    </span>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </Container>
      {moviesData?.results.length && (
        <Container maxWidth="xl">
          <Stack spacing={2} className={classes.stack}>
            <Pagination
              variant="outlined"
              shape="rounded"
              count={moviesData?.total_pages}
              page={page}
              onChange={onChange}
            />
          </Stack>
        </Container>
      )}
    </>
  );
}
