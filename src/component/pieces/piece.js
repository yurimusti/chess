import React from "react";
import { ReactComponent as Peao } from "../../assets/pawn.svg";
import { ReactComponent as Torre } from "../../assets/rook.svg";
import { ReactComponent as Bispo } from "../../assets/bishop.svg";
import { ReactComponent as Cavalo } from "../../assets/knight.svg";
import { ReactComponent as Dama } from "../../assets/queen.svg";
import { ReactComponent as Rei } from "../../assets/king.svg";

const Piece = ({ color, peace, onClick }) => {
  switch (peace) {
    case "peao":
      return (
        <div className="piece" onClick={onClick}>
          <Peao className={color} />
        </div>
      );

    case "torre":
      return (
        <div className="piece" onClick={onClick}>
          <Torre className={color} />
        </div>
      );

    case "bispo":
      return (
        <div className="piece" onClick={onClick}>
          <Bispo className={color} />
        </div>
      );

    case "cavalo":
      return (
        <div className="piece" onClick={onClick}>
          <Cavalo className={color} />
        </div>
      );

    case "dama":
      return (
        <div className="piece" onClick={onClick}>
          <Dama className={color} />
        </div>
      );

    case "rei":
      return (
        <div className="piece" onClick={onClick}>
          <Rei className={color} />
        </div>
      );

    default:
      return (
        <div className="piece" onClick={onClick}>
          {peace}
        </div>
      );
  }
};

export default Piece;
