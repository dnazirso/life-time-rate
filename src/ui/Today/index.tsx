import { Celebration, SentimentVeryDissatisfied } from "@mui/icons-material";
import { Stack, Slider, Button, Grid, TextField, Typography, Container } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../core/Store";
import { Note, setWeekNotes } from "../../core/Store/weeksSlice";
import { setYearNote } from "../../core/Store/yearsSlice";

export default function Today() {
  const dispatch = useAppDispatch();

  const [sliderValue, setSliderValue] = useState<number>(50);
  const [textValue, setTextValue] = useState<string>("");

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  };

  const onClick = () => {
    const note: Note = { date: new Date().getTime(), content: textValue, joy: sliderValue };
    dispatch(setWeekNotes(note));
    dispatch(setYearNote(note));
  };

  return (
    <Container sx={{ height: "75vh" }}>
      <Grid height="100%" container direction="column" spacing={2}>
        <Grid item xs />
        <Grid item>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <SentimentVeryDissatisfied />
            <Slider aria-label="joy" value={sliderValue} onChange={handleSliderChange} />
            <Celebration />
          </Stack>
        </Grid>
        <Grid item alignItems="baseline" container spacing={2}>
          <Grid item>
            <Typography>add a note :</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField rows={5} multiline fullWidth variant="outlined" placeholder="message" onChange={handleTextChange} />
          </Grid>
          <Grid item xs />
          <Grid item>
            <Button variant="outlined" color="primary" onClick={onClick}>
              Log
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
