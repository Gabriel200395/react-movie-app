import { ChangeEvent } from "react";
import { makeStyles } from "@mui/styles";
import { Pagination, Stack, Container } from "@mui/material";
import no_image from "../../assets/img/no_image.jpg";
import star from "../../assets/img/star.png";

interface Movies {
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  id: number;
  title: string;
  vote_average: number;
}

type Response = {
  total_pages: number;
  results: Movies[];
};

interface MoviesProps {
  moviesData: Response | undefined;
  onChange: (event: ChangeEvent<unknown>, value: number) => void;
  page: number;
}

export default function Movies({ page, onChange, moviesData }: MoviesProps) {
  const useStyles = makeStyles({
    stack: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "80px",
      backgroundColor: "rgba(32, 40, 62, 0.8)",
      margin: "40px 0px 40px 0px",
      width: "100%",
    },

    containerCard: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(282px, 282px))",
      gridGap: "30px 30px",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    cardItem: {
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      height: "480px",
      borderRadius: "12px",
      padding: "8px 8px 8px",
      position: "relative",
      backgroundColor: "rgba(32, 40, 62, 0.8)",
    },

    cardText: {
      color: "#ebeef5",
      fontFamily: "Poppins, sans-serif",
      fontWeight: "400px",
      fontSize: "14px",
      marginTop: "16px",
    },

    cardImg: {
      height: "400px",
      width: "266px",
      borderRadius: "8px",
    },

    cardStars: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      position: "absolute",
      top: "15px",
      left: "15px",
      right: "0px",
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
    },

    cardVote: {
      marginLeft: "5px",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="xl">
        <div className={classes.containerCard}>
          {moviesData?.results.map((filme) => {
            return (
              <a className={classes.cardItem} key={filme.id}>
                <img
                  className={classes.cardImg}
                  src={
                    filme.poster_path
                      ? "http://image.tmdb.org/t/p/w300/" + filme.poster_path
                      : no_image
                  }
                />
                <p className={classes.cardText}>{filme.title}</p>
                <div className={classes.cardStars}>
                  <img src={star} alt={star} />
                  <span className={classes.cardVote}>{filme.vote_average}</span>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
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
    </div>
  );
}
