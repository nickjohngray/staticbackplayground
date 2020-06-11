import axios from 'axios';
const KEY = 'AIzaSyCWF2RYiI2ZaC8bIOO6TihP0ZyGL0iQ-Uw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
