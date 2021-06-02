import axios from 'axios';

const KEY = 'AIzaSyBZJeR4AKQf9zY4ewZrg0n_DSyPOkYFPHg';

export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})