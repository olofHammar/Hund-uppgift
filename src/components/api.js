import axios from 'axios';

const instance = axios.create ({
    baseURL: "https://api.jsonbin.io/b/6087cedff6655022c46cff4b"
});

export default instance;