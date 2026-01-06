import { styled } from "styled-components";

const Titulo = styled.h2`
    color: #7C5DFF;
    font-size: 28px;
    font-weight: 600;
    text-align: ${ props => props.$alinhamento ? props.$alinhamento : 'left' };

    @media (max-width: 768px) {
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 22px;
    }
`
    
export default Titulo