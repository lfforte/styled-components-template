import { Carro } from "../Carro/Carro";
import { Moto } from "../Moto/Moto";
import { GaragemStyled, Botao, Estacionamento, ContainerEstacionamento } from "./styled";

export function Garagem(props) {
  return (
    <GaragemStyled>
      {/* <h1>Garagem do {props.nome}</h1> */}
      {/* <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao> */}
      <ContainerEstacionamento>
        <h1>Garagem de Carros</h1>
        <h1>Garagem de Motos</h1>
        <Estacionamento>
          <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"} />
          <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"} />
          <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} />
          <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} />
        </Estacionamento>
        <Estacionamento>
          <Moto adicionadoPor={props.nome} cor={"Preta"} ano={1980} flex={"false"} />
          <Moto adicionadoPor={props.nome} cor={"Verde"} ano={2000} flex={"false"} />
        </Estacionamento>
      </ContainerEstacionamento>
    </GaragemStyled>
  );
}
