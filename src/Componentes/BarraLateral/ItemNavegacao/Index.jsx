import styled from "styled-components"

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 16px;
    font-weight: ${props => props.$ativo ? '600' : '400'};
    line-height: 24px;
    color: ${props => props.$ativo ? '#7C5DFF' : '#E1E1E1'};
    padding: 12px;
    border-radius: 8px;
    transition: all 0.2s ease;
    position: relative;
    cursor: pointer;
    
    img {
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        transition: transform 0.2s ease, filter 0.2s ease;
    }
    
    &:hover {
        background: rgba(124,93,255,0.1);
        color: #7C5DFF;
        
        img {
            transform: scale(1.1);
            filter: drop-shadow(0 0 8px rgba(124,93,255,0.6));
        }
    }
    
    ${props => props.$ativo && `
        background: rgba(124,93,255,0.15);
        border-left: 3px solid #7C5DFF;
    `}
    
    @media (max-width: 1024px) {
        gap: 14px;
        font-size: 15px;
        padding: 10px;
        
        img {
            width: 22px;
            height: 22px;
        }
    }

    @media (max-width: 768px) {
        font-size: 14px;
        gap: 12px;
        padding: 8px 12px;
        white-space: nowrap;
        
        img {
            width: 20px;
            height: 20px;
        }
    }

    @media (max-width: 480px) {
        font-size: 13px;
        gap: 10px;
        padding: 8px 10px;

        & span {
            display: none; 
        }
    }
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <Item $ativo={ativo} title={children}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            <span>{children}</span>
        </Item>
    );
};

export default ItemNavegacao
