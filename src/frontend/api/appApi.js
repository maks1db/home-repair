import axios from 'axios';

let API_PREFIX = '';
if (process.env.DEV){
    API_PREFIX = 'http://localhost:4002';
}

API_PREFIX += '/api/v1';

export const loginUser = (login, password) => axios.post(`${API_PREFIX}/auth/login`, { login, password })
    .then((x) => {
        axios.defaults.headers.common = { 'Authorization': x.data.token };
        return x;
    });

export const logoutUser = () => axios.post(`${API_PREFIX}/auth/logout`)
    .then(() => axios.defaults.headers.common = {'Authorization': ''}); 

export const checkToken = (id) => axios.get(`${API_PREFIX}/login/token/${id}`); 
    