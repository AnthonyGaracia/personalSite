import VideoJs from './VideoJs';
import video from './toneDefa.mp4';




function Video () {
  const videoJsOptions = {
    controls: true,
    sources: [{
      src: video,
      type: 'video/mp4'
    }]
  }
  console.log(video);

  return (
   <div>
    <h1>videoPlayer</h1>
    <VideoJs options={videoJsOptions} />

   </div>
  );
}

export default Video;