import { createRoot } from "react-dom/client";
import { saveMediaFile, startScreenRecord } from "./utils/html";

const App = () => {
  const onScreenRecord = async () => {
    const extension = "mp4";
    const blob = await startScreenRecord(true, extension);
    saveMediaFile(blob, extension);
    const video = document.getElementById("video-stream") as HTMLVideoElement;
    video.src = URL.createObjectURL(blob);
    video.controls = true;
    video.play();
  };

  return (
    <div>
      <video id="video-stream" width={800} height={600} />
      <button type="button" onClick={onScreenRecord}>
        Start Screen Record
      </button>
    </div>
  );
};

const rootEl = document.getElementById("root");
if (rootEl) createRoot(rootEl).render(<App />);
