import { X_WINS, O_WINS, TIE } from '../shared/actionTypes'
import { checkWinner } from '../services/checkWinner'

export function checkResult(board) {
  if (checkWinner(board, 'X')) {
    return {
      type: X_WINS
    }
  } else if (checkWinner(board, 'O')) {
    return {
      type: O_WINS
    }
  } else {
    const check = board.filter(symbol => symbol === null)
    if (check.length === 0) {
      return {
        type: TIE
      }
    } else {
      return {
        type: 'RANDOM'
      }
    }
  }
}