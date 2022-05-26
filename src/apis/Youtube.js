import axios from 'axios';

const KEY = 'AIzaSyA4Yw7_-xv6BW2Q_v4Kxr1INH_x1cG3ymQ';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
