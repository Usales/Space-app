import styled from "styled-components"
import logo from "/imagens/logo.png"
import CampoTexto from "../CampoTexto/Index.jsx"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 212px;

    }
`

const Cabecalho = ({ busca, setBusca }) =>{
    return(
    <HeaderEstilizado>
        <img src={logo} alt='Logo' />
        <CampoTexto value={busca} onChange={e => setBusca(e.target.value)} />
    </HeaderEstilizado>
    )
}

export default Cabecalho