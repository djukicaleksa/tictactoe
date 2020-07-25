import React from 'react';

import {NewPlayer} from '../NewPlayer/NewPlayer';
import {LogIn} from "./LogIn/LogIn";

export class Home extends React.Component {
    
    constructor(props){
        super(props);

        this.state={isLogged:false};
    }

    componentDidMount(){
        console.log('component mounted');
    }

    logIn = () => {
            
    }

    render(){
        return (
            <div>
                {this.state.isLogged?<NewPlayer></NewPlayer>:<LogIn></LogIn>}
            </div>
        )
    }
}
