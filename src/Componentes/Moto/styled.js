import styled from "styled-components";


export const CardMotoStyled = styled.div`
  background-color: #20509f;
  padding: 10%;
  text-align: center;
  font-size: 0.7rem;
  border-radius: 5%;

  img{
    height: 75px;
    width: 130px;
    margin-bottom: 4%;
  }

  ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    list-style-type: none;
    text-align: left;
    grid-gap: 10%;
  }

  .add{
    background-color: whitesmoke;
    /* border: 1px solid grey; */
    text-align: center;
    border-radius: 8%;
    padding: 2%;
    width: 50px;
    box-shadow: 1px 2px darkgray;
  }
`;