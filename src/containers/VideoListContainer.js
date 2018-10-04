import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

const mapStatetoProps = (state) => {
  return { //map relevant components from state to container
    videos: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (key) => {
      dispatch (changeVideo(key));
    }
  };
};

const VideoListContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
