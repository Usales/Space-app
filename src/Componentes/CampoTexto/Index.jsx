import { styled } from "styled-components"

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
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
        padding: 10px 14px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        height: 44px;
        padding: 8px 12px;
    }
`

const CampoTexto = (props) => {
    return (
        <CampoTextoEstilizado placeholder="O que você procura?" {...props} />
    )
}

export default CampoTexto