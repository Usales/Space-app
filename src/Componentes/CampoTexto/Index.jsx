import { styled } from "styled-components"

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 12px;
    border: 2px solid #7C5DFF;
    background: #1E1F2C;
    box-sizing: border-box;
    width: 566px;
    max-width: 100%;
    color: #E1E1E1;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    transition: all 0.2s ease;

    &::placeholder {
        color: #A0A0A0;
    }

    &:focus {
        outline: none;
        border-color: #7C5DFF;
        box-shadow: 0 0 15px rgba(124,93,255,0.3);
        background: #252638;
    }

    @media (max-width: 768px) {
        width: 100%;
        font-size: 15px;
        height: 48px;
        padding: 10px 14px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
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