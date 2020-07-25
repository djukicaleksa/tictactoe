import Axios from 'axios';

const baseAPI = Axios.create({
    baseURL: 'http://178.128.206.150:7000/'
})

export { baseAPI } 