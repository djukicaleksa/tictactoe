import {baseAPI} from "../shared/Axios/baseAPI";
import Axios from "axios"

import {Board} from "../entities/Board"

 class APIRequests {

    registerUser () {
        return baseAPI.post('register_candidate')
        .then(response => response.data)
        .catch(error => console.log(error))
    }


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

            createBoard(apikey){
            return Axios({
                method: 'POST',
                url: 'http://178.128.206.150:7000/create_board',
                data: {apikey},
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
                })
                .then(response =>response.data)
                .catch(error=>console.log(error))
                            }

            listBoards(apikey){
                return Axios({
                    method: 'POST',
                    url: 'http://178.128.206.150:7000/boards',
                    data: {apikey},
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