import React from "react";

import styles from "./LogIn.module.css"

export const LogIn = () => {
    return (
        <div className={styles.loginSection} >
                <input type="text" placeholder="Username" className={styles.loginInput}></input>
                <input type="text" placeholder="Password" className={styles.loginInput}></input>
                <div>
                <button className={styles.loginButton} >Log in</button>
                </div>
        </div>
    )
}