export function checkWinner(boardList, symbol) {
    if (boardList[0] === symbol && boardList[1] === symbol && boardList[2] === symbol) {
      return true
    }
  
    if (boardList[3] === symbol && boardList[4] === symbol && boardList[5] === symbol) {
      return true
    }
  
    if (boardList[6] === symbol && boardList[7] === symbol && boardList[8] === symbol) {
      return true
    }
  
    if (boardList[0] === symbol && boardList[3] === symbol && boardList[6] === symbol) {
      return true
    }
  
    if (boardList[1] === symbol && boardList[4] === symbol && boardList[7] === symbol) {
      return true
    }
  
    if (boardList[2] === symbol && boardList[5] === symbol && boardList[8] === symbol) {
      return true
    }
  
    if (boardList[0] === symbol && boardList[4] === symbol && boardList[8] === symbol) {
      return true
    }
  
    if (boardList[6] === symbol && boardList[4] === symbol && boardList[2] === symbol) {
      return true
    }
  
    return false
  }