export const startScreenRecord = async (audio: boolean, ext: string) => {
  return new Promise<Blob>(async (resolve) => {
    let mediaRecorder;
    let recordedChunks: BlobPart[] = [];

    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { frameRate: 60, channelCount: 2 },
      audio,
    });

    mediaRecorder = new MediaRecorder(stream, { mimeType: `video/${ext}` });
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) recordedChunks.push(event.data);
    };
    mediaRecorder.onstop = () => {
      resolve(new Blob(recordedChunks, { type: `video/${ext}` }));
    };
    mediaRecorder.start();
  });
};

export const saveMediaFile = (blob: Blob, ext: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `recorded_video.${ext}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
