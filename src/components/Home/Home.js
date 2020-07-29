import React from 'react';

import {NewPlayer} from '../NewPlayer/NewPlayer';
import {LogIn} from "./LogIn/LogIn";

import socketIOClient from "socket.io-client"

import { apiRequests } from '../../services/APIRequests';
import { BoardList } from '../BoardList/BoardList';
import { GameField } from '../GameField/GameField';

export class Home extends React.Component {
    
    constructor(props){
        super(props);

        this.state={
            endpoint:'http://178.128.206.150:7000/?id=',
            isLogged:false,
            apiKey:"",
            name:"",
            playerId:"",
            boardList: [],
            isInGame:false,
            socket:null,
            boardId:null,
            boardMatrix : [null,null,null,null,null,null,null,null,null]
        };
    }

 
        componentDidMount() {
            
            console.log("mounted");
            if(this.state.playerId){

                const { endpoint } = this.state;
                // Made a connection with server
                console.log(endpoint);
                console.log(this.props.boardId);
                const socket = (endpoint+this.state.playerId);
    
                socket.on('joined',(data) =>console.log(data) );
               
              }
            }


    logIn = () => {
        apiRequests.registerUser()
        .then(returnedData => this.setState({apiKey:returnedData.apikey,isLogged:true}));
        
            const { endpoint } = this.state;
            // Made a connection with server
            const socket = socketIOClient(endpoint+this.state.playerId,{transports: ['websocket']});
            socket.on("connect", () => {
                
              this.setState({ socket: socket })
              console.log(this.state.socket);
            })
            console.log(this.state.socket);
            console.log(socket);
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
    joinBoard = (boardId) => {
        this.setState({isInGame:true,boardId})
        
    }
    opponentLeft = (data) => {
        // If opponent left then get back from game play to player screen
        alert("Opponent Left");
        this.setState({ isGameStarted: false, gameId: null, gameData: null });
        
    }

    render(){
        return (
            <div>
                {this.state.isInGame?<GameField boardId={this.state.boardId} opponentLeft={this.opponentLeft}></GameField> :((!this.state.name) ?(this.state.isLogged?<NewPlayer addNewPlayer={this.addNewPlayer}></NewPlayer>:<LogIn logIn={this.logIn}></LogIn>) :
                 <BoardList boardList={this.state.boardList} createBoard={this.createBoard} joinBoard={this.joinBoard}></BoardList>) }               
            </div>
        )
    }
}
