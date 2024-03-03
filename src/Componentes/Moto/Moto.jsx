import React from "react";
import moto from "../../Imagens/Moto.png"
import { CardMotoStyled } from "./styled"

export function Moto(props) {
  return (
    <CardMotoStyled>
      <h2>Royal Enfield</h2>
      <img src={moto} />
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Flex: {props.flex}</li>
        <li>Ano: {props.ano}</li>
        <li className="add">Adicionar {/* {props.adicionadoPor} */}</li>
      </ul>
    </CardMotoStyled>
  );
}

