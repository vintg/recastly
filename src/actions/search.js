import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return _.debounce((dispatch) => {
    return searchYouTube({key: YOUTUBE_API_KEY, query: q, max:20},
       (videos) => {
        dispatch(changeVideoList(videos));
        dispatch(changeVideo(videos[0]));
      } // end cb
    ); //end searchYT
  },1000); //end debounce
}; //end module

export default handleVideoSearch;