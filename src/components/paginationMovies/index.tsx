import { Pagination, Stack, Container } from "@mui/material"; 
import {styles} from "./styles"
import {PaginationMoviesProps} from "../../types/paginationMovies"

export default function PaginationMovies({total_pages, onChange, page}: PaginationMoviesProps) {
   const classes = styles()

    return (
    <Container maxWidth="xl">
      <Stack spacing={2} className={classes.stack}>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={total_pages}
          page={page}
          onChange={onChange}
        />
      </Stack>
    </Container>
  );
}
