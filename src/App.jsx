import styled from "styled-components";
import EstilosGlobais from "./Componentes/EstilosGlobais/Index";
import Cabecalho from "./Componentes/Cabecalho/Index";
import BarraLateral from "./Componentes/BarraLateral/Index";
import Banner from "./Componentes/BannerTitulo/Index";
import Galeria from "./Componentes/Galeria/Index";
import Sobre from "./Componentes/Sobre/Index";
import Temas from "./Componentes/Temas/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import fotos from "./fotos.json"
import { useState } from "react";
import Rodape from "./Componentes/Rodape/Index";
import MaisCurtidas from "./Componentes/MaisCurtidas/Index";
import SurpreendaMe from "./Componentes/SurpreendaMe/Index";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244F 48%,
    #154580 96.76%
  );
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  padding: 0;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const ConteudoPrincipal = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(1)
  const [busca, setBusca] = useState("");
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Router>
          <Cabecalho busca={busca} setBusca={setBusca} />
          <MainContainer>
            <BarraLateral />
            <ConteudoPrincipal>
              <Wrapper>
                <Routes>
                  <Route path="/" element={
                    <>
                      <Banner
                        texto="Navegue pela galeria"
                        backgroundImage="/imagens/banner.png"
                      />
                      <Galeria fotos={fotosDaGaleria} busca={busca}/>
                    </>
                  } />
                  <Route path="/sobre" element={<Sobre />} />
                  <Route path="/temas" element={<Temas />} />
                  <Route path="/mais-curtidas" element={<MaisCurtidas />} />
                  <Route path="/surpreenda-me" element={<SurpreendaMe />} />
                </Routes>
              </Wrapper>
            </ConteudoPrincipal>
          </MainContainer>
        </Router>
      </AppContainer>
      <Rodape />
    </FundoGradiente>
  );
}

export default App;
