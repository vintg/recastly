import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStatetoProps = (state) => {
  return { //map relevant components from state to container
    video: state.currentVideo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (key) => {
      dispatch (handleSearchChange(key));
    }
  };
};

const VideoPlayerContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
