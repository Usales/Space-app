import styled from "styled-components"
import logo from "/imagens/logo.png"
import CampoTexto from "../CampoTexto/Index.jsx"
import { Link } from "react-router-dom"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    width: 100%;
    box-sizing: border-box;

    img{
        max-width: 212px;
        width: 100%;
        height: auto;
    }

    @media (max-width: 1024px) {
        padding: 40px 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        padding: 30px 0;
        align-items: stretch;
    }

    @media (max-width: 480px) {
        padding: 24px 0;
        gap: 1.5rem;

        img {
            max-width: 160px;
        }
    }
`

const Cabecalho = ({ busca, setBusca }) =>{
    return(
    <HeaderEstilizado>
        <Link to="/">
            <img src={logo} alt='Logo' style={{cursor: 'pointer'}} />
        </Link>
        <CampoTexto value={busca} onChange={e => setBusca(e.target.value)} />
    </HeaderEstilizado>
    )
}

export default Cabecalho