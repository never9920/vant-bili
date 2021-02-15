import axios from 'axios'
import router from '../router';
import Vue from 'vue'

const http = axios.create({
    baseURL: 'http://112.74.99.5:3000/web/api'
})

http.interceptors.request.use(function(config) {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('id')) {
        config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
    }
    return config;
})

http.interceptors.response.use(function(response) {
        return response;
    },
    function(error) {
        console.log(error)
        if (error.response.status === 401 || error.response.status === 402) {
            router.push('/login')
            Vue.prototype.$toast.fail(error.response.data.message)
        }
        return Promise.reject(error)
    });

export default http