import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.17.0.3:9496',
});

export default api;