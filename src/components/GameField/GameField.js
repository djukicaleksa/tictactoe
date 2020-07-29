import React from "react"

import socketIOClient from "socket.io-client"

import styles from "./GameField.module.css"

export class GameField extends React.Component {
    constructor(props){
        super(props);

        this.state={
            playerId:this.props.playerId,
            endpoint:'http://: http://178.128.206.150:7000/?id=',

        }
    }

    componentDidMount() {
        if(this.state.playerId){

            const { endpoint } = this.state;
            // Made a connection with server
            console.log(endpoint);
            console.log(this.props.boardId);
            const socket = (endpoint+this.state.playerId);
            socket.on('joined',(data) =>console.log(data) );
                
                
                
            
            // socket.on("joined", data => {
            //   this.setState({ socket: socket })
            //   console.log("user connected to websocket");
            
    }
}

    render(){
        return (
            <div className={styles.gameContainer}>
                <table className={styles.table}>
                    <tbody>
                    <tr>
                        <td className={styles.square} ></td>
                        <td className={styles.square} ></td>
                        <td className={styles.square} ></td>
                    </tr>
                    <tr>
                        <td className={styles.square}></td>
                        <td className={styles.square}></td>
                        <td className={styles.square}></td>
                    </tr>
                    <tr>
                        <td className={styles.square}></td>
                        <td className={styles.square}></td>
                        <td className={styles.square}></td>
                    </tr>
                    </tbody>
                </table>
                <hr></hr>
            </div>
            
        )
    }
}