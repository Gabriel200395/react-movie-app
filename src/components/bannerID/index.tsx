import { Container } from "@mui/system";
import { styles } from "./styles";
import { BannerIDMovieProps } from "../../types/bannerIDMovieProps"; 
import no_image from "../../assets/img/no_image.jpg"

export default function BannerIDMovie({ data }: BannerIDMovieProps) {
  const classes = styles();

  return (
    <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
      <div
        className={classes.container}
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(54, 44, 146, 0.4) 0%, 
          rgba(18, 98, 151, 0.4) 100%),url(${
            data?.backdrop_path ?
            "http://image.tmdb.org/t/p/w1280/" + data?.backdrop_path : no_image
          }) `,
          backgroundSize:  data?.backdrop_path ? "cover" : "contain",
          backgroundPosition: "50% 50%", 
          backgroundRepeat: !data?.backdrop_path ? "no-repeat" : "auto", 
        }}
      >
        <div className={classes.containerTitle}>
          <h3 className={classes.title}>{data?.original_title}</h3>
        </div>
      </div>
    </Container>
  );
}
