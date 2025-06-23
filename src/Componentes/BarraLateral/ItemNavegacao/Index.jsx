import styled from "styled-components"

const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 8px;
    background: ${props => props.$ativo ? '#154580' : 'transparent'};
    color: ${props => props.$ativo ? '#fff' : '#b0c4de'};
    font-weight: ${props => props.$ativo ? 'bold' : 'normal'};
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: #15458044;
    }
`

const ItemNavegacao = ({ iconeAtivo, iconeInativo, ativo, children }) => (
    <Item $ativo={ativo}>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="" width={24} height={24} />
        {children}
    </Item>
)

export default ItemNavegacao
