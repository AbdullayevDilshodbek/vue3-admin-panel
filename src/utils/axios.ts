import axios from "axios";

const { VITE_APP_API_URL } = import.meta.env;

const api = axios.create({
    baseURL: VITE_APP_API_URL + '/',
    headers: {
        "Accept": "application/json"
    }
})
const access_token_gm = localStorage.getItem('access_token_key')
if(access_token_gm){
  api.defaults.headers.common['Authorization'] = `Bearer ${access_token_gm}`;
}

api.interceptors.response.use(response => response, async error => {
    if (error.response?.status === 401) {
        localStorage.clear();
        window.location.reload();
    }
    return Promise.reject(error)
})

export default api
