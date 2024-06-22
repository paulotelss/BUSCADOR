import axios from 'axios';

//https://viacep.com.br/ws/80020-010/json/

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});

export default api;