import { Box, Button } from "@mui/material";
import Webcam from "react-webcam";
import { useAppSelector } from "../../core/Store";
import { setPicture } from "../../core/Store/cameraSlice";
import { useAppDispatch } from "../../core/Store";
import redCircle from '../../assets/red-circle.png'

const videoConstraints = {
  width: 350,
  height: 200,
  facingMode: "user"
};

export default function Camera() {
  const dispatch = useAppDispatch();
  let { photo } = useAppSelector((state) => state.camera);

  function startCountDown(duration: number, element: any) {
    let secondsRemaining = duration;
    let sec = 0;

    let countInterval = setInterval(function () {
      sec = secondsRemaining;

      element.textContent = sec;

      secondsRemaining = secondsRemaining - 1;
      if (secondsRemaining < 0) {
        clearInterval(countInterval)
        element.textContent = ''
      };

    }, 1000);
  }

  return (
    <>
      {(photo.length > 0)
        ?
        <>
          <img src={photo} width="350" height="200" />
          <Box>
            <Button variant="contained" onClick={() => {
              window.location.reload();
            }}>Reprendre une photo</Button>
          </Box>
        </>
        :
        <Webcam
          audio={false}
          mirrored={true}
          height={200}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        >
          {({ getScreenshot }) => (
            <Box sx={{
              mt: -4,
              height: "40px",
            }}
            >
              <Button fullWidth id="bouton-webcam" variant="contained"
                onClick={() => {
                  startCountDown(3, document.querySelector('#timer'))
                  setTimeout(() => {
                    const payload = getScreenshot();
                    if (!payload) return;
                    dispatch(setPicture(payload));
                  }, 4000);
                }}
                sx={{
                  backgroundColor: 'black',
                  '&:hover': {
                    backgroundColor: 'black',
                  },
                  borderRadius: 0,
                }}
              >
                <Box component="img" src={redCircle} sx={{ width: 30, '&:hover': { transform: 'scale(1.1)', transition: '100ms' } }} />
              </Button>
            </Box>
          )}
        </Webcam>
      }
      <h1 id="timer" sx={{ fontSize: '4em', textAlign: 'center', color: 'white' }}></h1>
    </>
  )
}
