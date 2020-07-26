import React from "react";
import { SingleBoard } from "./SingleBoard/SingleBoard";

export const BoardList = (props) => {
    return (
        <div>
            {(props.boardList==[]) ? <p>No Boards</p> :
            (<ul>
                {props.boardList.map((board,i)=>{
                    return <SingleBoard id={board.id} key={i} players={board.players}></SingleBoard>
                })}
            </ul>)}
            <button onClick={()=>props.createBoard()}>Create Board</button>
        </div>
    )
}