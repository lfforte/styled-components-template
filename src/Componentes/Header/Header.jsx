import React from "react";
import { HeaderContainer } from "./styled"
import logo from "../../Imagens/garagem.png"

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} />
      <h1>Header da Garagem</h1>
    </HeaderContainer>
  )
}

export default Header