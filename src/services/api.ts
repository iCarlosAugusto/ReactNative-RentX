import axios from 'axios';

const api = axios.create({
    //baseURL: "http://localhost:3333"
    baseURL: 'http://192.168.1.5:3333',
    //baseURL: 'http://192.168.0.107:3333',
    //baseURL: '192.168.1.2:3333',
    //exp://192.168.1.2:19000
    //baseURL: 'http://192.168.1.5:3333'
});

export default api;