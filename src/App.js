import Footer from "./Componentes/Footer/Footer";
import { Garagem } from "./Componentes/Garagem/Garagem";
import Header from "./Componentes/Header/Header";
import { GlobalStyle } from "./GlobalStyled"

export default function App() {
  /* const nome = "LuizZ"; */

  /* function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  } */

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Garagem /* nome={nome} mensagemAprentacao={apresentaGaragem} */ />
      <Footer />
    </div>
  );
}