import { Button } from "@mui/material";
import Webcam from "react-webcam";
import { useAppSelector } from "../../core/Store";
import { setPicture } from "../../core/Store/cameraSlice";
import { useAppDispatch } from "../../core/Store";
import './webcam.css'

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
          <Button variant="contained" onClick={() => {
            window.location.reload();
          }}>Reprendre une photo</Button>
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
            <Button id="bouton-webcam" variant="contained"
              onClick={() => {
                startCountDown(3, document.querySelector('#timer'))
                setTimeout(() => {
                  const payload = getScreenshot();
                  if (!payload) return;
                  dispatch(setPicture(payload));
                }, 4000);
              }}
              style={{
                marginTop: "-36px",
                backgroundColor: "black",
                height: "40px",
                borderRadius: 0,

              }}
            >
              <img className="red-circle" src={process.env.PUBLIC_URL + "/red-circle.png"} style={{ width: 30 }} />
            </Button>
          )}
        </Webcam>
      }
      <h1 id="timer" style={{ fontSize: '4em', textAlign: 'center', color: 'white' }}></h1>
    </>
  )
}
