import { resetarMovendo, resetarPodeAndar } from "./utilsTab";

const andar2Casas = (tabuleiro, piece) => {
  let newTabuleiro = tabuleiro.map((e, i) => {
    if (e === piece) {
      tabuleiro[i].movendo = !tabuleiro[i].movendo;
      if (piece.color === "black") {
        //MOVER
        if (
          tabuleiro[i + 8].hasPiece !== true &&
          tabuleiro[i + 16].hasPiece !== true
        ) {
          tabuleiro[i].movendo = !tabuleiro[i].movendo;
          tabuleiro[i + 8].podeMover = !tabuleiro[i + 8].podeMover;
          tabuleiro[i + 16].podeMover = !tabuleiro[i + 16].podeMover;
        } else if (tabuleiro[i + 8].hasPiece !== true) {
          tabuleiro[i].movendo = !tabuleiro[i].movendo;
          tabuleiro[i + 8].podeMover = !tabuleiro[i + 8].podeMover;
        }
        //COMER
      } else {
        if (
          tabuleiro[i - 8].hasPiece !== true &&
          tabuleiro[i - 16].hasPiece !== true
        ) {
          tabuleiro[i].movendo = !tabuleiro[i].movendo;
          tabuleiro[i - 8].podeMover = !tabuleiro[i - 8].podeMover;
          tabuleiro[i - 16].podeMover = !tabuleiro[i - 16].podeMover;
        } else if (tabuleiro[i - 8].hasPiece !== true) {
          tabuleiro[i].movendo = !tabuleiro[i].movendo;
          tabuleiro[i - 8].podeMover = !tabuleiro[i - 8].podeMover;
        }
      }
    }
    return tabuleiro[i];
  });
  return newTabuleiro;
};

const andar1Casa = (tabuleiro = [], piece) => {
  let newTabuleiro = tabuleiro.map((e, i) => {
    if (e === piece) {
      tabuleiro[i].movendo = !tabuleiro[i].movendo;

      if (piece.color === "black") {
        if (tabuleiro[i + 8].hasPiece === false) {
          tabuleiro[i].movendo = !tabuleiro[i].movendo;
          tabuleiro[i + 8].podeMover = !tabuleiro[i + 8].podeMover;
        }

        if (
          (tabuleiro[i + 7].hasPiece &&
            tabuleiro[i + 7].color !== piece.color) ||
          (tabuleiro[i + 9].hasPiece && tabuleiro[i + 9].color !== piece.color)
        ) {
          if (
            tabuleiro[i + 7].hasPiece &&
            tabuleiro[i + 7].color !== piece.color
          ) {
            tabuleiro[i + 7].danger = !tabuleiro[i + 7].danger;
          }
          if (
            tabuleiro[i + 9].hasPiece &&
            tabuleiro[i + 9].color !== piece.color
          ) {
            tabuleiro[i + 9].danger = !tabuleiro[i + 9].danger;
          }
        }
      } else {
        if (tabuleiro[i - 8].hasPiece === false) {
          tabuleiro[i].movendo = !tabuleiro[i].movendo;
          tabuleiro[i - 8].podeMover = !tabuleiro[i - 8].podeMover;
        }

        if (
          (tabuleiro[i - 7].hasPiece &&
            tabuleiro[i - 7].color !== piece.color) ||
          (tabuleiro[i - 9].hasPiece && tabuleiro[i - 9].color !== piece.color)
        ) {
          if (
            tabuleiro[i - 7].hasPiece &&
            tabuleiro[i - 7].color !== piece.color
          ) {
            tabuleiro[i - 7].danger = !tabuleiro[i - 7].danger;
          }
          if (
            tabuleiro[i - 9].hasPiece &&
            tabuleiro[i - 9].color !== piece.color
          ) {
            tabuleiro[i - 9].danger = !tabuleiro[i - 9].danger;
          }
        }
      }
    }
    return tabuleiro[i];
  });
  return newTabuleiro;
};

export const moverPeao = (piece, tabuleiro, setTabuleiro) => {
  let newTab = [];
  if (piece.color === "black") {
    if (piece.position.y === 1) {
      newTab = andar2Casas(tabuleiro, piece);
    } else {
      newTab = andar1Casa(tabuleiro, piece);
    }
  } else {
    if (piece.position.y === 6) {
      newTab = andar2Casas(tabuleiro, piece);
    } else {
      newTab = andar1Casa(tabuleiro, piece);
    }
  }
  setTabuleiro(newTab);
};
