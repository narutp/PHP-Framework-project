import axios from 'axios'
import { BASE_URL } from '../Libraries/Constant'
import { getAuth } from '../Libraries/Helper'

let axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 60000
})

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.common['Authorization'] = 'Bearer ' + getAuth()
    config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    console.log(config.headers.common['Authorization'])
    return config
}, function (error) {
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use(function (response) {
    if(parseInt(response.status) === 401) {
        window.location.href = BASE_URL
    } else {
        return response
    }
}, function (error) {
    return Promise.reject(error)
})

class HttpRequest {

    constructor() {
        // set axios in case that wanting to use pure axios
        this.axios = axios
    }

    setHeader(header) {
        axiosInstance.defaults.headers.common[header.key] = header.value
    }

    get(targetApi, data, responseType) {
        return axiosInstance.get(targetApi, {
            params: data,
            responseType
        })
    }

    post(targetApi, data) {
        return axiosInstance.post(targetApi, data)
    }

    put(targetApi, data) {
        return axiosInstance.put(targetApi, data)
    }

    delete(targetApi, id) {
        return axiosInstance.delete(targetApi, {id: id})
    }
}

export default HttpRequest