import { Container } from "@mui/material";
import { Search } from "@mui/icons-material";
import { SearchField, Field, styles } from "./styles";
import { SearchMovieProps } from "../../types/searchMovieProps";

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
