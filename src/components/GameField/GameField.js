import React from "react"

import store from "../../store";

import styles from "./GameField.module.css"
import GameTracker from "../GameTracker/GameTracker";

export class GameField extends React.Component {
    constructor(props){
        super(props);

        this.state=store.getState();


        
    }

    componentDidMount() {
       console.log("mounted");

}

    onTileClick = (event) =>{
        console.log(event.currentTarget.getAttribute("data-id"));
    }

    render(){
        return (
             
            <div className={styles.gameContainer}>
                <table className={styles.table}>
                    <tbody>
                    <tr>
                        <td className={styles.square} data-id="0" onClick={this.onTileClick}></td>
                        <td className={styles.square} data-id="1" onClick={this.onTileClick}></td>
                        <td className={styles.square} data-id="2" onClick={this.onTileClick}></td>
                    </tr>
                    <tr>
                        <td className={styles.square} data-id="3" onClick={this.onTileClick}></td>
                        <td className={styles.square} data-id="4" onClick={this.onTileClick}></td>
                        <td className={styles.square} data-id="5" onClick={this.onTileClick}></td>
                    </tr>
                    <tr>
                        <td className={styles.square} data-id="6" onClick={this.onTileClick}></td>
                        <td className={styles.square} data-id="7" onClick={this.onTileClick}></td>
                        <td className={styles.square} data-id="8" onClick={this.onTileClick}></td>
                    </tr>
                    </tbody>
                </table>
                <hr></hr>
                <GameTracker></GameTracker>
            </div>
            
        )
    }
}