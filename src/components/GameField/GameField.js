import React from "react"

import styles from "./GameField.module.css"

export class GameField extends React.Component {
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return (
            <div className={styles.gameContainer}>
                <table className={styles.table}>
                    <tbody>
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
                    <tr>
                        <td className={styles.square}></td>
                        <td className={styles.square}></td>
                        <td className={styles.square}></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}