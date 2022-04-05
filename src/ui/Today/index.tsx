import { SentimentVerySatisfied, MoodBad, Save, Close } from '@mui/icons-material';
import {
  Stack,
  Slider,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  Alert,
  Collapse, 
  IconButton,
} from "@mui/material";
import React, { useState } from "react";

export default function Today() {
  const [value, setValue] = useState<number>(50);
  const [open, setOpen] = useState(false);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.reload();
    setOpen(true);
  }

  return (
    <Container sx={{ height: "75vh" }}>
      <Grid height="100%" container direction="column" spacing={2}>
        <Grid item xs />
        <Grid item>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <MoodBad />
            <Slider 
              aria-label="joy"
              defaultValue={50}
              value={value}
              step={10}
              marks={[0, 20, 50, 80, 100].map(i => ({
                label: i,
                value: i
              }))}
              valueLabelDisplay="on"
              onChange={handleChange} />
            <SentimentVerySatisfied />
          </Stack>
        </Grid>
        <Grid item alignItems="baseline" container spacing={2}>
          <Grid item>
            <Typography>add a note :</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              rows={6}
              multiline
              fullWidth
              variant="outlined"
              placeholder="explain your mood"
            />
          </Grid>
          <Grid item xs />
          <Collapse in={open}>
              <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Close fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
              >
                Your mood has been saved !
              </Alert>
          </Collapse>
          <Grid item>
            <Button 
              variant="outlined" 
              color="primary" 
              startIcon={< Save />} 
              onClick={ handleClick }>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
