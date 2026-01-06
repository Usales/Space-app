import styled from 'styled-components';
import Titulo from "../../Titulo/Index"

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

const ImagemPopular = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        height: 180px;
        border-radius: 16px;
    }

    @media (max-width: 480px) {
        height: 160px;
        border-radius: 12px;
    }
`;

const Descricao = styled.p`
    color: #fff;
    font-size: 0.98rem;
    margin: 8px 0 24px 0;
`;

const Populares = () =>{
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

    return(
        <PopularesContainer>
            <Titulo $alinhamento="center">Mais Curtidas</Titulo>
            {fotosPopulares.map(foto => (
                <div key={foto.id}>
                    <ImagemPopular 
                        src={foto.path}
                        alt={foto.titulo}
                    />
                    <Descricao>{foto.descricao}</Descricao>
                </div>
            ))}
        </PopularesContainer>
    )
}

export default Populares