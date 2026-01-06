import styled from 'styled-components';
import tags from './tags.json';

const TagTituloEstilizado = styled.div`
    color: #E1E1E1;
    font-size: 22px;
    font-weight: 600;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }

    p {
        margin: 0 0 16px 0;
    }
`;

const TagsContainer = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 0;

    @media (max-width: 1024px) {
        gap: 16px;
    }

    @media (max-width: 768px) {
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 12px;
        padding-bottom: 8px;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, and Opera */
        }
    }

    @media (max-width: 480px) {
        gap: 10px;
    }
`;

const Tag = styled.button`
    font-size: 16px;
    font-weight: 400;
    color: #E1E1E1;
    background: ${({ $ativa }) => $ativa ? '#7C5DFF' : '#1E1F2C'};
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    padding: 10px 20px;
    box-sizing: border-box;
    border: 2px solid ${({ $ativa }) => $ativa ? '#7C5DFF' : 'transparent'};
    outline: none;
    white-space: nowrap;
    
    &:hover {
        background: ${({ $ativa }) => $ativa ? '#7C5DFF' : '#2A2B3C'};
        box-shadow: ${({ $ativa }) => $ativa ? '0 0 15px rgba(124,93,255,0.5)' : '0 0 10px rgba(124,93,255,0.3)'};
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 16px;
    }

    @media (max-width: 480px) {
        font-size: 13px;
        padding: 7px 14px;
    }
`;

const Tags = ({ tagAtiva, aoSelecionarTag }) => { 
    return (
        <TagTituloEstilizado>
            <p>Busque por tags:</p>
            <TagsContainer>
                {tags.map(tag => (
                    <Tag
                        key={tag.id}
                        $ativa={tagAtiva === tag.id}
                        onClick={() => aoSelecionarTag(tag.id)}
                    >
                        {tag.titulo}
                    </Tag>
                ))}
            </TagsContainer>
        </TagTituloEstilizado>
    );
};

export default Tags;