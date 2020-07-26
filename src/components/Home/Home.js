import React from 'react';

import {NewPlayer} from '../NewPlayer/NewPlayer';
import {LogIn} from "./LogIn/LogIn";


import { apiRequests } from '../../services/APIRequests';
import { BoardList } from '../BoardList/BoardList';
import { GameField } from '../GameField/GameField';

export class Home extends React.Component {
    
    constructor(props){
        super(props);

        this.state={
            isLogged:false,
            apiKey:"",
            name:"",
            playerId:"",
            boardList: [],
            isInGame:true,
        };
    }

    componentDidMount(){
        
        console.log('component mounted');
    }

    logIn = () => {
        apiRequests.registerUser()
        .then(returnedData => this.setState({apiKey:returnedData.apikey,isLogged:true}))
        // .then(data => console.log(data))
    }

    addNewPlayer = () => {
        if(this.state.apiKey) {
            let newPlayerName = document.getElementById("playerName").value;
            apiRequests.newPlayer(newPlayerName,this.state.apiKey)
            .then(playerData=>this.setState({name:playerData.name,playerId:playerData.id}))
            .catch(error =>console.log(error));
            this.getBoardList();
        }
    }

    createBoard = () => {
        apiRequests.createBoard(this.state.apiKey)
        this.getBoardList();
        
    }

    getBoardList = () => {
        apiRequests.listBoards(this.state.apiKey)
        .then(boardsInfo => this.setState({boardList:boardsInfo}))

    }


    render(){
        return (
            <div>
                {this.state.isInGame?<GameField></GameField> :((!this.state.name) ?(this.state.isLogged?<NewPlayer addNewPlayer={this.addNewPlayer}></NewPlayer>:<LogIn logIn={this.logIn}></LogIn>) :
                 <BoardList boardList={this.state.boardList} createBoard={this.createBoard}></BoardList>) }
                
            </div>
        )
    }
}
