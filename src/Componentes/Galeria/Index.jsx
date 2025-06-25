import styled from "styled-components"
import Tags from "./Tags/Index"
import Populares from "./Populares/Index"
import Figure from "./Figure/Index"
import { useState } from "react"

const GaleriaContainer = styled.section`
  display: flex;
  gap: 24px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const SecaoFotos = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0;
  animation: slideDownFade 1.3s cubic-bezier(0.23, 1, 0.32, 1);

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`

const ListaFotos = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  justify-items: center;
  animation: slideDownFade 1.4s cubic-bezier(0.23, 1, 0.32, 1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    min-width: 0;
    margin-left: 0;
    margin-right: 0;
  }
`

const Galeria = ({ fotos = [], busca = "", aoFotoSelecionada }) => {
  const [fotosFavoritas, setFotosFavoritas] = useState([]);
  const [fotoExpandida, setFotoExpandida] = useState(null);
  const [tagAtiva, setTagAtiva] = useState(14); // 14 = Todas

  const aoFavoritar = (foto) => {
    if (fotosFavoritas.find(fav => fav.id === foto.id)) {
      setFotosFavoritas(fotosFavoritas.filter(fav => fav.id !== foto.id));
    } else {
      setFotosFavoritas([...fotosFavoritas, foto]);
    }
  };

  const aoExpandir = (foto) => {
    if (fotoExpandida?.id === foto.id) {
      setFotoExpandida(null);
    } else {
      setFotoExpandida(foto);
    }
  };

  const fotosFiltradas = fotos.filter(foto => {
    const correspondeTag = tagAtiva === 14 || foto.tagId === tagAtiva;
    const correspondeBusca = foto.titulo.toLowerCase().includes(busca.toLowerCase());
    return correspondeTag && correspondeBusca;
  });

  return (
    <GaleriaContainer>
      <SecaoFotos>
        <Tags tagAtiva={tagAtiva} aoSelecionarTag={setTagAtiva} />
        <ListaFotos>
          {fotosFiltradas.map((foto) => (
            <li key={foto.id}>
              <Figure
                $expandida={fotoExpandida?.id === foto.id}
                src={foto.path}
                alt={foto.titulo}
                titulo={foto.titulo}
                fonte={foto.fonte}
                aoFavoritar={() => aoFavoritar(foto)}
                aoExpandir={() => aoExpandir(foto)}
              />
            </li>
          ))}
        </ListaFotos>
      </SecaoFotos>
      <Populares />
    </GaleriaContainer>
  )
}

export default Galeria