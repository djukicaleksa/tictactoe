import React from 'react';

import {NewPlayer} from '../NewPlayer/NewPlayer';
import {LogIn} from "./LogIn/LogIn";

import { apiRequests } from '../../services/APIRequests';

export class Home extends React.Component {
    
    constructor(props){
        super(props);

        this.state={
            isLogged:false,
            apiKey:"",
            name:"",
            playerId:""
        };
    }

    componentDidMount(){
        console.log('component mounted');
    }

    logIn = () => {
        apiRequests.registerUser()
        .then(returnedData => this.setState({apiKey:returnedData.apikey,isLogged:true}))
    }

    addNewPlayer = () => {
        if(this.state.apiKey) {
            let newPlayerName = document.getElementById("playerName").value;
            apiRequests.newPlayer(newPlayerName,this.state.apiKey)
            .then(playerData=>this.setState({name:playerData.name,playerId:playerData.id}))
            .catch(error =>console.log(error))
        }
    }

    render(){
        return (
            <div>
                {this.state.isLogged?<NewPlayer addNewPlayer={this.addNewPlayer}></NewPlayer>:<LogIn logIn={this.logIn}></LogIn>}
            </div>
        )
    }
}
