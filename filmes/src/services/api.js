
//url Base https://api.themoviedb.org/3/
// URl da API https://api.themoviedb.org/3/movie/now_playing?api_key=3157e8c97642c6a07a2746c25c8d5e4e&language=pt-BR



import axios from 'axios'



const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;