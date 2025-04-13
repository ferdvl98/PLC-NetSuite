import { WINNER_COMBOS } from "../constans"

export const checkWinnerFrom = boardToCheck => {
    // revisamos combinaciones ganadoras para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a , b, c, d] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c] &&
        boardToCheck[a] === boardToCheck[d]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  export const checkEndGame = newBoard => {
    // Revisamos si hay un empate
    // si no hay más espacios vacios en el tablero

    return newBoard.every((square) => square !== null)
  }