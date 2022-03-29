import { Grid } from "@mui/material";
import { Component } from "react";

export default class Camera extends Component {
  stream: MediaStream | null = null;
  video: HTMLVideoElement | null = null;
  canvasContext: CanvasRenderingContext2D | null = null;
  timerID: NodeJS.Timeout | null = null;

  async componentDidMount() {
    try {
      await this.startCamera();
      this.timerID = setInterval(() => this.drawFrame(), 100);
    } catch (e) {
      this.stopCamera();
    }
  }

  componentWillUnmount() {
    this.stopCamera();
  }

  setVideoRef = (ref: HTMLVideoElement) => {
    this.video = ref;
  };

  stopCamera = () => {
    if (this.timerID) {
      clearInterval(this.timerID);
      this.timerID = null;
    }
    if (this.stream) {
      this.stream.getTracks().map((t) => t.stop());
    }
    this.stream = null;
    this.canvasContext = null;
  };

  startCamera = async () => {
    this.stopCamera();

    await navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
          width: window.screen.width,
          height: window.screen.height,
        },
      })
      .then((stream) => (this.stream = stream))
      .catch((error) => console.error(error));

    if (this.video) {
      this.video.srcObject = this.stream;
      this.video.setAttribute("playsinline", "true");
      this.video.play(); // firefox does not emit `loadeddata` if video not playing
      await this.streamLoadedPromise();
    }

    if (this.video && !this.canvasContext) {
      const canvas = document.createElement("canvas");
      canvas.width = this.video.videoWidth;
      canvas.height = this.video.videoHeight;
      this.canvasContext = canvas.getContext("2d");
    }
  };

  streamLoadedPromise = () =>
    new Promise((resolve, reject) => {
      this.video?.addEventListener("loadeddata", resolve, { once: true });
      this.video?.addEventListener("error", reject, { once: true });
    });

  captureFrame = (): Uint8ClampedArray | undefined => {
    if (!this.video) return;

    this.canvasContext?.drawImage(
      this.video,
      0,
      0,
      this.video.videoWidth,
      this.video.videoHeight
    );

    return this.canvasContext?.getImageData(
      0,
      0,
      this.video.videoWidth,
      this.video.videoHeight
    ).data;
  };

  drawFrame = () => {
    window.requestAnimationFrame(() => {
      if (!this.canvasContext) return;
      this.captureFrame();
    });
  };

  render() {
    return (
      <Grid container height="100vh">
        <Grid
          item
          component="video"
          sx={{
            maxWidth: "100%",
            height: "auto",
          }}
          ref={this.setVideoRef}
        />
      </Grid>
    );
  }
}
