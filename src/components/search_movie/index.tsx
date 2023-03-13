import { Container } from "@mui/material";
import { Search } from "@mui/icons-material";
import { styled } from "@mui/system";
import { styles } from "./styles";
import { SearchMovieProps } from "../../types/searchMovieProps";

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


export default function SearchMovie({
  fieldMovie,
  handleChangeField,
}: SearchMovieProps) {
  const classes = styles();


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
