import React from 'react';

import {NewPlayer} from '../NewPlayer/NewPlayer'

export class Home extends React.Component {
    
    constructor(props){
        super(props);

        this.state={isLogged:false};
    }

    componentDidMount(){
        console.log('component mounted');
    }


    render(){
        return (
            <div>
                {isLogged?console.log("login page goes here"):<NewPlayer></NewPlayer>}
            </div>
        )
    }
}
