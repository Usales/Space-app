import styled from 'styled-components';
import { useState, useEffect } from 'react';

const FigureEstilizado = styled.figure`
    width: 100%;
    max-width: 500px;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    cursor: pointer;
    background: #1E1F2C;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 18px rgba(124,93,255,0.5);
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const Imagem = styled.img`
    max-width: 100%;
    border-radius: 0;
    height: 260px;
    object-fit: cover;
    cursor: pointer;
    width: 100%;
    transition: opacity 0.3s ease, filter 0.3s ease;
    animation: fadeIn 0.6s ease-in-out;
    opacity: 0;
    animation-fill-mode: forwards;

    ${FigureEstilizado}:hover & {
        filter: brightness(1.1);
    }

    @media (max-width: 768px) {
        height: 240px;
    }

    @media (max-width: 480px) {
        height: 200px;
    }
`;

const Figcaption = styled.figcaption`
    background-color: #1E1F2C;
    border-radius: 0;
    color: #E1E1E1;
    box-sizing: border-box;
    padding: 16px;

    @media (max-width: 768px) {
        padding: 12px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }

    h3 {
        font-weight: 600;
        font-size: 18px;
        color: #E1E1E1;
    }

    h4 {
        flex-grow: 1;
        font-weight: 400;
        font-size: 14px;
        color: #A0A0A0;
        margin-top: 4px;
    }

    h3, h4 {
        margin: 0;
    }
`;

const BotoesContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 8px;
`;

const BotaoFavoritar = styled.button`
    background: transparent;
    border: none;
    color: ${props => props.$favorito ? '#FF0000' : '#FFFFFF'};
    cursor: pointer;
    font-size: 24px;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ImagemFlutuante = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const BotaoFechar = styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.7);
        transform: translateY(-5px);
    }
`;

const Figure = ({ src, alt, titulo, fonte, aoFavoritar }) => {
    const [modalAberto, setModalAberto] = useState(false);
    const [favorito, setFavorito] = useState(false);

    const abrirModal = () => {
        document.body.style.overflow = 'hidden';
        setModalAberto(true);
    };

    const fecharModal = () => {
        document.body.style.overflow = 'auto';
        setModalAberto(false);
    };

    const toggleFavorito = () => {
        setFavorito(!favorito);
        aoFavoritar();
    };

    useEffect(() => {
        const fecharComEsc = (evento) => {
            if (evento.key === 'Escape') {
                fecharModal();
            }
        };

        if (modalAberto) {
            document.addEventListener('keydown', fecharComEsc);
        }

        return () => {
            document.removeEventListener('keydown', fecharComEsc);
            document.body.style.overflow = 'auto';
        };
    }, [modalAberto]);

    return (
        <>
            <FigureEstilizado>
                <Imagem src={src} alt={alt} onClick={abrirModal} />
                <Figcaption>
                    <h3>{titulo}</h3>
                    <h4>{fonte}</h4>
                    <BotoesContainer>
                        <BotaoFavoritar onClick={toggleFavorito} $favorito={favorito}>
                            {favorito ? '❤️' : '🤍'}
                        </BotaoFavoritar>
                    </BotoesContainer>
                </Figcaption>
            </FigureEstilizado>
            {modalAberto && (
                <Overlay onClick={fecharModal}>
                    <ImagemFlutuante src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
                    <BotaoFechar onClick={fecharModal}>
                        ✕
                    </BotaoFechar>
                </Overlay>
            )}
        </>
    );
};

export default Figure; 