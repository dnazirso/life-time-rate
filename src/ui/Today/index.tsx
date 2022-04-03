import { Celebration, SentimentVeryDissatisfied } from "@mui/icons-material";
import {
  Stack,
  Slider,
  Button,
  Grid,
  TextField,
  Typography,
  Container,
  styled,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../core/Store";
import { setImg } from "../../core/Store/imageUploadSlice";

const Input = styled("input")({
  display: "none",
});

export default function Today() {
  const dispatch = useAppDispatch();

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
            <label htmlFor="outlined-button-file">
              <Input
                accept="image/*"
                id="outlined-button-file"
                multiple
                type="file"
              />
              {({ getImgFile }: { getImgFile: any }) => (
                <Button
                  variant="contained"
                  component="span"
                  onClick={() => {
                    const payload = getImgFile();
                    if (!payload) return payload;
                    dispatch(setImg(payload));
                  }}
                >
                  Upload
                </Button>
              )}
            </label>
            <Button variant="outlined" color="primary">
              Log
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
