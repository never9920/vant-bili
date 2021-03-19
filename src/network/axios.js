import axios from 'axios'
import router from '../router';
import Vue from 'vue'

axios.defaults.baseURL = 'http://112.74.99.5:3000/web/api'

axios.interceptors.request.use(function(config) {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('id')) {
        config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
    }
    return config;
})

axios.interceptors.response.use(function(response) {
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

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}