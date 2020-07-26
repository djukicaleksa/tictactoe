import React from "react";
import {boardIco} from "./board_ico.png"

import styles from "./SingleBoard.module.css"

export const SingleBoard = (props) => {
    return (
        <div className={styles.board} data-id={props.id}>
            <img src={boardIco} alt="Ooops" className={styles.boardImg}></img>
            <div className={styles.boardInfo}>
                <p>Board ID : {props.id} </p>
                <p>No. of players {props.players}: </p>
            </div>
        </div>
    )
}