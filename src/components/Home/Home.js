import React from 'react';

import {NewPlayer} from '../NewPlayer/NewPlayer';
import {LogIn} from "./LogIn/LogIn";

import { apiRequests } from '../../services/APIRequests';

export class Home extends React.Component {
    
    constructor(props){
        super(props);

        this.state={
            isLogged:false,
            apiKey:""
        };
    }

    componentDidMount(){
        console.log('component mounted');
    }

    logIn = () => {
        apiRequests.registerUser()
        .then(returnedData => this.setState({apiKey:returnedData.apikey,isLogged:true}))
    }

    render(){
        return (
            <div>
                {this.state.isLogged?<NewPlayer></NewPlayer>:<LogIn logIn={this.logIn}></LogIn>}
            </div>
        )
    }
}
