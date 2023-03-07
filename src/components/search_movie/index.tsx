import { Container } from "@mui/material";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";

interface SearchMovieProps {
  handleChangeField: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fieldMovie: string;
}

const SearchField = styled("div")({
  width: "600px",
  height: "60px",
  position: "relative",
});
const Field = styled("input")({
  position: "relative",
  outline: "none",
  backgroundColor: "transparent",
  paddingLeft: "80px",
  height: "100%",
  width: "500px",
  color: "#475069",
  fontSize: "35px",
  borderRadius: "5px",
  border: "solid 1px #475069",
  fontFamily: "Poppins , sans-serif",
  fontWeight: "400",
});

const useStyles = makeStyles({
  icon: {
    position: "absolute",
    top: "15px",
    left: "15px",
    color: "#475069",
    fontSize: "40px",
  },

  container: {
    backgroundColor: "transparent",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    marginTop: "40px", 
    marginBottom:"40px"

  },

  containerField: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

export default function SearchMovie({
  fieldMovie,
  handleChangeField,
}: SearchMovieProps) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container maxWidth="xl">
        <div className={classes.containerField}>
          <SearchField>
            <Field
              type={"text"}
              value={fieldMovie}
              onChange={handleChangeField}
            />
            <Search className={classes.icon} sx={{ fontSize: 40 }} />
          </SearchField>
        </div>
      </Container>
    </div>
  );
}
