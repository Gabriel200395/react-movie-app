import { Container, Typography } from "@mui/material";

export default function Banner() {
  return (
    <div className="hero-container">
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 3 }} color="#EFFFEF">
          Knock at the Cabin
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ pb: 10 }}
          width="600px"
          color="#EFFFEF"
        >
          While vacationing at a remote cabin, a young girl and her two fathers
          are taken hostage by four armed strangers who demand that the family
          make an unthinkable choice to avert the apocalypse. With limited
          access to the outside world, the family must decide what they believe
          before all is lost.
        </Typography>
      </Container>
    </div>
  );
}
