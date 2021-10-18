import axios from 'axios';

const Key = "AIzaSyDg2u_hmizbofR9wKDELr7DxDxO4nEYLnM";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResult: 10,
        key: Key
    }
})