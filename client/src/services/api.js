import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
    baseURL: 'http://192.168.99.100:3333',
    headers: {
        Authorization: `bearer ${token}`
    }    
});

export default api;