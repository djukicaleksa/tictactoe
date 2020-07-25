import React from "react";

import styles from "./LogIn.module.css"




export const LogIn = (props) => {
    return (
        <div className={styles.loginSection} >
                <input type="text" placeholder="Username" className={styles.loginInput}></input>
                {/* <input type="text" placeholder="Password" className={styles.loginInput}></input>     FOR THE SAKE OF PROJECT THIS LINE HAS BEEN COMMENTED SINCE WE ONLY NEED USERNAME TO LOG IN*/} 
                <div>
                <button className={styles.loginButton} onClick={()=>props.logIn()} >Log in</button>
                </div>
        </div>
    )
}