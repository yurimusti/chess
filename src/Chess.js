import React, { useState } from "react";
import { Piece } from "./component/pieces";
import { table } from "./utils/tableTeste";
import { moverPeao } from "./logic/peao";
import { resetarMovendo, resetarPodeAndar } from "./logic/utilsTab";

import "./index.scss";

function Chess() {
  const [tabuleiro, setTabuleiro] = useState(table);

  const _handleOnClick = piece => {
    if (piece.hasPiece) {
      const filtered = tabuleiro.filter(e => e.movendo === true);
      let newTab = tabuleiro;
      if (filtered.length !== 0 && filtered[0] !== piece) {
        newTab = tabuleiro.map(e => {
          e.movendo = false;
          e.podeMover = false;
          e.danger = false;
          return e;
        });
      }
      const tab = newTab.map(e => {
        if (e === piece) {
          e.movendo = !e.movendo;
        }
        return e;
      });
      switch (piece.peace) {
        case "peao":
          moverPeao(piece, tab, value => setTabuleiro(value), piece.color);
          break;
        default:
          console.log("a", piece);
          break;
      }
    } else {
      if (piece.podeMover) {
        const filter = tabuleiro.filter(e => e.movendo === true);
        let peace = filter[0].peace;
        let color = filter[0].color;
        const newTabuleiro = tabuleiro.map(e => {
          if (e === piece) {
            e.movendo = false;
            e.podeMover = false;
            e.danger = false;
            e.peace = peace;
            e.color = color;
            e.hasPiece = true;
          } else if (e === filter[0]) {
            e.movendo = false;
            e.podeMover = false;
            e.danger = false;
            e.peace = "";
            e.color = "";
            e.hasPiece = false;
          } else {
            e.movendo = false;
            e.podeMover = false;
            e.danger = false;
          }
          return e;
        });
        setTabuleiro(newTabuleiro);
      }
    }
  };

  console.log("MOVENDO", tabuleiro.filter(e => e.movendo === true));
  console.log("DANGER", tabuleiro.filter(e => e.danger === true));
  // console.log("TABULEIRO", tabuleiro);

  return (
    <div className="chess">
      <div className="tabuleiro">
        {tabuleiro.map(piece => {
          return (
            <div
              className={`cell ${
                piece.podeMover === true
                  ? "canMove"
                  : piece.danger === true
                  ? "danger"
                  : ""
              }`}
            >
              <Piece
                color={piece.color}
                peace={piece.peace}
                onClick={() => _handleOnClick(piece)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chess;
