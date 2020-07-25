import React from "react";
import logo from "./tictactoe.png"

import style from "./NewPlayer.module.css"

export const NewPlayer = () => {
    return (
        <div className={style.container}>
            <img className={style.logoImg} src={logo}alt="Oops" ></img>
            <br></br>
            <input type="text" className={style.nameInput} placeholder="Enter your nick"></input>
            <button className={style.newPlayerButton}>Create new player</button>
        </div>
    )
} 