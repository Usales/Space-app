import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const RodapeContainer = styled.footer`
    background: #1E1F2C;
    padding: 32px;
    text-align: center;
    margin-top: 48px;
    border-top: 1px solid rgba(124,93,255,0.2);
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 24px 16px;
        margin-top: 32px;
    }

    @media (max-width: 480px) {
        padding: 20px 12px;
        margin-top: 24px;
    }
`;

const TextoRodape = styled.p`
    color: #E1E1E1;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    opacity: 0.8;

    @media (max-width: 768px) {
        font-size: 15px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const RedesSociais = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 24px;

    @media (max-width: 768px) {
        gap: 24px;
        margin-top: 20px;
    }

    @media (max-width: 480px) {
        gap: 20px;
        margin-top: 16px;
    }
`;

const BotaoRedeSocial = styled.a`
    color: #E1E1E1;
    font-size: 28px;
    transition: all 0.3s ease;
    cursor: pointer;
    opacity: 0.8;

    @media (max-width: 768px) {
        font-size: 24px;
    }

    @media (max-width: 480px) {
        font-size: 22px;
    }

    &:hover {
        color: #7C5DFF;
        transform: translateY(-5px);
        opacity: 1;
    }
`;

const LinkFigma = styled.a`
    color: #E1E1E1;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 600;
    font-size: 18px;
    opacity: 0.8;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 15px;
    }

    &:hover {
        color: #7C5DFF;
        opacity: 1;
    }
`;

const Rodape = () => {
    return (
        <RodapeContainer>
            <TextoRodape>Site feito para a pratica de programação com React + Vite</TextoRodape>
            <TextoRodape style={{ marginTop: '16px' }}>
                <LinkFigma 
                    href="https://www.figma.com/design/vgNq83nBKAuwW079nWloQQ/React--arquivos-est%C3%A1ticos-com-integra%C3%A7%C3%A3o-de-conceito-%C3%A1rea-de-component-%7C-SpaceApp--Community-?node-id=123-1462&t=KvqFduz2bi5EpdY3-0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Projeto Figma base
                </LinkFigma>
            </TextoRodape>
            <RedesSociais>
                <BotaoRedeSocial 
                    href="https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </BotaoRedeSocial>
                <BotaoRedeSocial 
                    href="https://www.instagram.com/gab_sales_salerno/following/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </BotaoRedeSocial>
                <BotaoRedeSocial 
                    href="https://github.com/Usales" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </BotaoRedeSocial>
            </RedesSociais>
        </RodapeContainer>
    );
};

export default Rodape;
