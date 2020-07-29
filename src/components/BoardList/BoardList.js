import React from "react";
import { SingleBoard } from "./SingleBoard/SingleBoard";

import styles from "./BoardList.module.css"


export const BoardList = (props) => {
    return (
        <div className={styles.border}>
        <div className={styles.board}>
            <h1 className={styles.title}>List of boards</h1>
            {(props.boardList===[]) ? <p>No Boards</p> :
            (<ul className={styles.boardList}>
                {props.boardList.map((board,i)=>{
                   return <li key={i}><SingleBoard id={board.id}  players={board.players} joinBoard={props.joinBoard}></SingleBoard></li>
                })}
            </ul>)}
        </div>
            <button onClick={()=>props.createBoard()} className={styles.createBtn}>Create Board</button>
            </div>
    )
}