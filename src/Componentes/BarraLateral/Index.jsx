import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao/Index";
import { Link, useLocation } from "react-router-dom";

const BarraLateralEstilizada = styled.aside`
  width: 212px;
  padding: 0px;
  box-sizing: border-box;
  animation: slideDownFade 1.2s cubic-bezier(0.23, 1, 0.32, 1);

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 1rem;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, and Opera */
    }
  }
`;

const BarraLateral = () => {
  const location = useLocation();
  return (
    <BarraLateralEstilizada>
      <ListaEstilizada>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ItemNavegacao
            iconeAtivo="/icones/home-ativo.png"
            iconeInativo="/icones/home-inativo.png"
            ativo={location.pathname === "/"}
          >
            Início
          </ItemNavegacao>
        </Link>
        <Link to="/temas" style={{ textDecoration: 'none' }}>
          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"
            ativo={location.pathname === "/temas"}
          >
            Temas
          </ItemNavegacao>
        </Link>
        <Link to="/sobre" style={{ textDecoration: 'none' }}>
          <ItemNavegacao
            iconeAtivo="/icones/novas-ativo.png"
            iconeInativo="/icones/novas-inativo.png"
            ativo={location.pathname === "/sobre"}
          >
            Sobre
          </ItemNavegacao>
        </Link>
        <Link to="/mais-curtidas" style={{ textDecoration: 'none' }}>
          <ItemNavegacao
            iconeAtivo="/icones/mais-curtidas-ativo.png"
            iconeInativo="/icones/mais-curtidas-inativo.png"
            ativo={location.pathname === "/mais-curtidas"}
          >
            Mais curtidas
          </ItemNavegacao>
        </Link>
        <Link to="/surpreenda-me" style={{ textDecoration: 'none' }}>
          <ItemNavegacao
            iconeAtivo="/icones/surpreenda-me-ativo.png"
            iconeInativo="/icones/surpreenda-me-inativo.png"
            ativo={location.pathname === "/surpreenda-me"}
          >
            Surpreenda-me
          </ItemNavegacao>
        </Link>
      </ListaEstilizada>
    </BarraLateralEstilizada>
  );
};

export default BarraLateral;
