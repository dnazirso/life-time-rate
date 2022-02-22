import { Container, Grid } from "@mui/material";
import { useAppSelector } from "../../core/Store";
import Age from "./Age";

export default function Years() {
  const { years } = useAppSelector((state) => state.years);

  return (
    <Container>
      <Grid container justifyContent="space-evenly" maxWidth={420}>
        {years.map((year) => (
          <Grid key={year.date} item>
            <Age year={year} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
