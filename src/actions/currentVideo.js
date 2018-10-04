var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'CHANGE_VIDEO',
  video: video
});

export default changeVideo;

/*
  Currently playing video changes in two ways:
  1) Click on a Video List Entry in the Video list or
  2) Searching in the Search changes the currently playing video
*/