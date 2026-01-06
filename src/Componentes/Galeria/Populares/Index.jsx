import styled from 'styled-components';
import Titulo from "../../Titulo/Index"
import { useState, useRef } from 'react';

const PopularesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 230px;
    min-width: 230px;

    @media (max-width: 1024px) {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
    }

    @media (max-width: 768px) {
        width: 100%;
        min-width: 100%;
    }
`;

const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

const CarouselContainer = styled.div`
    display: flex;
    gap: 16px;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: rgba(124,93,255,0.3) transparent;
    padding-bottom: 8px;
    
    &::-webkit-scrollbar {
        height: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(124,93,255,0.3);
        border-radius: 3px;
        
        &:hover {
            background: rgba(124,93,255,0.5);
        }
    }
    
    @media (max-width: 1024px) {
        flex-direction: row;
    }
`;

const ItemContainer = styled.div`
    flex: 0 0 auto;
    width: 200px;
    
    @media (max-width: 1024px) {
        width: 180px;
    }
    
    @media (max-width: 768px) {
        width: 160px;
    }
`;

const ImagemPopular = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);

    &:hover {
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 6px 18px rgba(124,93,255,0.4);
    }

    @media (max-width: 768px) {
        height: 180px;
    }

    @media (max-width: 480px) {
        height: 160px;
    }
`;

const Descricao = styled.p`
    color: #E1E1E1;
    font-size: 14px;
    margin: 8px 0 0 0;
    text-align: center;
`;

const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
    
    @media (max-width: 1024px) {
        display: none;
    }
`;

const Dot = styled.button`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: ${props => props.$ativo ? '#7C5DFF' : 'rgba(255,255,255,0.3)'};
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
        background: ${props => props.$ativo ? '#7C5DFF' : 'rgba(255,255,255,0.5)'};
        transform: scale(1.2);
    }
`;

const Populares = () =>{
    const [scrollPosition, setScrollPosition] = useState(0);
    const carouselRef = useRef(null);
    
    const fotosPopulares = [
        {
            id: 1,
            titulo: "Foto 1",
            path: "/imagens/populares/foto-1.png"
        },
        {
            id: 2,
            titulo: "Foto 2",
            path: "/imagens/populares/foto-2.png"
        },
        {
            id: 3,
            titulo: "Foto 3",
            path: "/imagens/populares/foto-3.png"
        },
        {
            id: 4,
            titulo: "Foto 4",
            path: "/imagens/populares/foto-4.png"
        },
        {
            id: 5,
            titulo: "Foto 5",
            path: "/imagens/populares/foto-5.png"
        }
    ];

    const handleScroll = () => {
        if (carouselRef.current) {
            const scroll = carouselRef.current.scrollLeft;
            const itemWidth = 216; // 200px + 16px gap
            const currentIndex = Math.round(scroll / itemWidth);
            setScrollPosition(currentIndex);
        }
    };

    const scrollToItem = (index) => {
        if (carouselRef.current) {
            const itemWidth = 216;
            carouselRef.current.scrollTo({
                left: index * itemWidth,
                behavior: 'smooth'
            });
        }
    };

    return(
        <PopularesContainer>
            <Titulo $alinhamento="center">Mais Curtidas</Titulo>
            <CarouselWrapper>
                <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
                    {fotosPopulares.map(foto => (
                        <ItemContainer key={foto.id}>
                            <ImagemPopular 
                                src={foto.path}
                                alt={foto.titulo}
                            />
                            <Descricao>{foto.titulo}</Descricao>
                        </ItemContainer>
                    ))}
                </CarouselContainer>
                <DotsContainer>
                    {fotosPopulares.map((_, index) => (
                        <Dot
                            key={index}
                            $ativo={scrollPosition === index}
                            onClick={() => scrollToItem(index)}
                            aria-label={`Item ${index + 1}`}
                        />
                    ))}
                </DotsContainer>
            </CarouselWrapper>
        </PopularesContainer>
    )
}

export default Populares