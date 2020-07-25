import {baseAPI} from "../shared/Axios/baseAPI";
import Axios from "axios"

 class APIRequests {

    registerUser () {
        return baseAPI.post('register_candidate')
        .then(response => response.data)
        .catch(error => console.log(error))
    }

//     addNewPlayer (name,apiKey) {
//         return baseAPI.post('player',{name,apiKey}
//         )
//             .then(response=>console.log(response))
//             .catch(error => console.log(error))
//     }
//     post(ime, apiKey) {
//         return Axios({
//             method: 'POST',
//             url: 'http://178.128.206.150:7000/player',
//             data: {ime,apiKey}
//         })
//         .then(response => console.log(response))

// }
        newPlayer(name,apikey){
            return Axios({
                method: 'POST',
                url: 'http://178.128.206.150:7000/player',
                data: {name,apikey},
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
                })
                .then(response =>response.data)
                .catch(error=>console.log(error))
                            }
}

export const apiRequests = new APIRequests();