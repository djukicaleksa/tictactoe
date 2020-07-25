import {baseAPI} from "../shared/Axios/baseAPI";

 class APIRequests {

    registerUser () {
        return baseAPI.post('register_candidate')
        .then(response => response.data)
        .catch(error => console.log(error))
    }

}

export const apiRequests = new APIRequests();