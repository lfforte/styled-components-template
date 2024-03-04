import React from "react";
import fusca from "../../Imagens/fusca.png"
import { CardStyled } from "./styled"

export function Carro(props) {
  return (
    <CardStyled>
      <h2>Volksvagem</h2>
      <img src={fusca} />
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Flex: {props.flex}</li>
        <li>Ano: {props.ano}</li>
        <li className="add">Adicionar {/* {props.adicionadoPor} */}</li>
      </ul>
    </CardStyled>
  );
}

