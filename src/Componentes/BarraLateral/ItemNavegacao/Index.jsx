import styled from "styled-components"

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 22px;
    font-size: 20px;
    line-height: 24px;
    color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    
    img {
        flex-shrink: 0;
    }
    
    @media (max-width: 1024px) {
        gap: 18px;
        font-size: 19px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
        gap: 12px;
        padding: 8px 12px;
        white-space: nowrap;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        gap: 10px;
        padding: 8px 10px;

        & span {
            display: none; 
        }
    }

    @media (max-width: 320px) {
        padding: 6px 8px;
        gap: 8px;
    }
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <Item $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            <span>{children}</span>
        </Item>
    );
};

export default ItemNavegacao
