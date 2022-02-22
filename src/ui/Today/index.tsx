import { Celebration, SentimentVeryDissatisfied } from "@mui/icons-material";
import {
  Stack,
  Slider,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { useState } from "react";

export default function Today() {
  const [value, setValue] = useState<number>(50);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Container sx={{ height: "75vh" }}>
      <Grid height="100%" container direction="column" spacing={2}>
        <Grid item xs />
        <Grid item>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <SentimentVeryDissatisfied />
            <Slider aria-label="joy" value={value} onChange={handleChange} />
            <Celebration />
          </Stack>
        </Grid>
        <Grid item alignItems="baseline" container spacing={2}>
          <Grid item>
            <Typography>add a note :</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              rows={5}
              multiline
              fullWidth
              variant="outlined"
              placeholder="message"
            />
          </Grid>
          <Grid item xs />
          <Grid item>
            <Button variant="outlined" color="primary">
              Log
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
