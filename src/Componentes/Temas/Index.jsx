import styled from "styled-components";

const temas = [
  {
    titulo: "Planetas do Sistema Solar",
    descricao: "Conheça os planetas que orbitam nossa estrela, o Sol.",
    imagem: "/imagens/galeria/foto-1.png",
    alt: "Imagem de vários planetas do sistema solar alinhados"
  },
  {
    titulo: "Nebulosas Famosas",
    descricao: "Descubra as nuvens de gás e poeira mais impressionantes do universo.",
    imagem: "/imagens/galeria/foto-2.png",
    alt: "Imagem de uma nebulosa colorida no espaço"
  },
  {
    titulo: "Galáxias Espirais",
    descricao: "Explore galáxias espirais como a Via Láctea e seus mistérios.",
    imagem: "/imagens/galeria/foto-3.png",
    alt: "Imagem do universo estrelado com uma galáxia espiral no centro"
  },
  {
    titulo: "Missões Espaciais",
    descricao: "Explore as missões que expandiram nosso conhecimento do espaço.",
    imagem: "/imagens/galeria/foto-4.png",
    alt: "Imagem de um foguete sendo lançado ao espaço"
  },
  {
    titulo: "Astronautas Notáveis",
    descricao: "Conheça as pessoas que viajaram além da Terra.",
    imagem: "/imagens/galeria/foto-5.png",
    alt: "Imagem de um astronauta flutuando no espaço"
  },
  {
    titulo: "Tecnologia Espacial",
    descricao: "Veja as inovações que tornam a exploração possível.",
    imagem: "/imagens/galeria/foto-6.png",
    alt: "Imagem de um satélite ou telescópio espacial em órbita"
  }
];

const Container = styled.section`
  padding: 32px;
  max-width: 1200px;
  margin: 40px auto;
  animation: slideDownFade 1.1s cubic-bezier(0.23, 1, 0.32, 1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 24px;
    margin: 24px auto;
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin: 16px auto;
  }
`;
const Titulo = styled.h1`
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 1.9rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 16px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
const Card = styled.article`
  background: linear-gradient(160deg, #112244 60%, #154580 100%);
  border-radius: 16px;
  padding: 24px 20px 20px 20px;
  color: #fff;
  box-shadow: 0 2px 16px #0003;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  animation: slideDownFade 1.2s cubic-bezier(0.23, 1, 0.32, 1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 16px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    border-radius: 10px;
  }

  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px #0005;
  }
`;
const Imagem = styled.img`
  width: 100%;
  max-width: 260px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 18px;
  box-shadow: 0 2px 12px #0004;
  transition: transform 0.3s;

  @media (max-width: 768px) {
    height: 160px;
    margin-bottom: 16px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    height: 140px;
    margin-bottom: 12px;
    border-radius: 8px;
  }

  ${Card}:hover & {
    transform: scale(1.10);
  }
`;
const Nome = styled.h2`
  font-size: 1.25rem;
  margin: 8px 0 8px 0;

  @media (max-width: 768px) {
    font-size: 1.15rem;
    margin: 6px 0;
  }

  @media (max-width: 480px) {
    font-size: 1.05rem;
    margin: 4px 0;
  }
`;
const Desc = styled.p`
  font-size: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Temas = () => (
  <Container>
    <Titulo>Explorar Temas</Titulo>
    <Grid>
      {temas.map((tema, i) => (
        <Card key={i}>
          <Imagem src={tema.imagem} alt={tema.alt} />
          <Nome>{tema.titulo}</Nome>
          <Desc>{tema.descricao}</Desc>
        </Card>
      ))}
    </Grid>
  </Container>
);

export default Temas; 