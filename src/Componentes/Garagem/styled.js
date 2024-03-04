import styled from "styled-components";

export const GaragemStyled = styled.main`
  background-color: #20509f;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 84vh;

  h1{
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
  }


`;

export const ContainerEstacionamento = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr 8fr;
justify-items: center;
align-items: center;
grid-gap: 5%;
`;

export const Estacionamento = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 550px;
  height: 450px;
  align-items: center;
  justify-content: center;
  grid-gap: 5% 15%;
  background-color: #417fd7;
  padding: 5%;
  border-radius: 5%;
`;

export const Botao = styled.button`
  margin: 3% 0;
  padding: 2%;
  border: 2px solid black;
  border-radius: 10%;
`;