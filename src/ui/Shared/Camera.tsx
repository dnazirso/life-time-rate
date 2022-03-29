import { Button } from "@mui/material";
import Webcam from "react-webcam";
import { useAppSelector } from "../../core/Store";
import { setPicture } from "../../core/Store/cameraSlice";
import { useAppDispatch } from "../../core/Store";

const videoConstraints = {
  width: 800,
  height: 600,
  facingMode: "user"
};

export default function Camera() {
    const dispatch = useAppDispatch();
    const { photo } = useAppSelector((state) => state.camera);
    return ( 
        <>
            {(photo.length > 0) ? <img src={photo} /> :
            <Webcam
                audio={false}
                height={720}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            >
              {({ getScreenshot }) => (
                <Button variant="contained"
                    onClick={() => {
                        const payload = getScreenshot();
                        if (!payload) return;
                            dispatch(setPicture(payload));
                    }}
                >
                  CAPTURE
                </Button>
              )}
            </Webcam>
            }
        </>
    )
}
