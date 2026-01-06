import { styled } from "styled-components"
import search from './search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;


const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 48px 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    max-width: 100%;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 18px;
        height: 48px;
        padding: 10px 42px 10px 14px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        height: 44px;
        padding: 8px 38px 8px 12px;
    }
`

const IconeLupa = styled.img`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 38px;
    height: 38px;
    pointer-events: none;

    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
        right: 8px;
    }

    @media (max-width: 480px) {
        width: 28px;
        height: 28px;
        right: 6px;
    }
`;

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado placeholder="O que você procura?" {...props} />
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto