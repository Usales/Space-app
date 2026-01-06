import styled from 'styled-components';
import tags from './tags.json';

const TagTituloEstilizado = styled.div`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }

    p {
        margin: 0 0 12px 0;
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
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    outline: none;
    white-space: nowrap;
    ${({ $ativa }) => $ativa && `border-color: #C98CF1; background: #154580;`}
    &:hover {
        border-color: #C98CF1;
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        font-size: 18px;
        padding: 10px 16px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        padding: 8px 14px;
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