  
import React from 'react'
import { connect } from 'react-redux'

import { checkResult } from '../../actions/resultsAction.js';

import styles from "./GameTracker.module.css"

function GameTracker(props) {

  const { board, players, result, checkResult } = props;

  if (!(result.tie || result.win)) {
    checkResult(board)
  }

  if (result.tie) {
    return <div className="alert alert-info mt-2">It's a Draw :(</div>
  } else if (result.win === 'X') {
    const player = players.p1 === 'X' ? 'Player 1' : 'Player 2'
    return <div className="alert alert-success mt-2">{player} Wins!</div>
  } else if (result.win === 'O') {
    const player = players.p1 === 'O' ? 'Player 1' : 'Player 2'
    return <div className="alert alert-success mt-2">{player} Wins!</div>
  }

  return (
    <div className={styles.container}>
      <div >
        <p>
          <strong>Current Turn</strong>:
          {players.turn === 'p1' ? <span>Player 1</span> : <span>Player 2</span>}
        </p>
        <p><strong>Player 1</strong>: {players.p1}</p>
        <p><strong>Player 2</strong>: {players.p2}</p>
      </div>
    </div>
  )
}

export default connect(
  ({ board, players, result }) => ({ board, players, result }),
  dispatch => ({ checkResult: (board) => dispatch(checkResult(board)) })
)(GameTracker)