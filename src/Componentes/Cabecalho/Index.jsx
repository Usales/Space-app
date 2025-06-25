import styled from "styled-components"
import logo from "/imagens/logo.png"
import CampoTexto from "../CampoTexto/Index.jsx"
import { Link } from "react-router-dom"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        max-width: 212px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        padding: 30px 0;
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