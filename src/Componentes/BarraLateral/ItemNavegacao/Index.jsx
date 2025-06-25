import styled from "styled-components"

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 22px;
    font-size: 20px;
    line-height: 24px;
    color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    
    @media (max-width: 768px) {
        font-size: 18px;
        gap: 16px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        gap: 10px;
        padding: 8px 10px;

        & span { /* Supondo que o texto (children) seja um span */
            display: none; 
        }
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
