import styled from "styled-components";

const Container = styled.section`
  background: #1E1F2C;
  color: #E1E1E1;
  padding: 32px;
  border-radius: 16px;
  max-width: 900px;
  margin: 40px auto;
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
  animation: slideDownFade 1.1s cubic-bezier(0.23, 1, 0.32, 1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 24px;
    margin: 24px auto;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin: 16px auto;
    border-radius: 10px;
  }
`;
const Titulo = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 10px;
  }
`;
const Texto = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 14px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 12px;
  }
`;
const Imagem = styled.img`
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 32px auto 0 auto;
  border-radius: 12px;

  @media (max-width: 768px) {
    margin: 24px auto 0 auto;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    margin: 16px auto 0 auto;
    border-radius: 8px;
  }
`;

const Sobre = () => (
<Container>
    <Titulo>Sobre o Espaço</Titulo>
    <Texto>
      O universo é vasto, misterioso e absolutamente fascinante. Este site foi criado para compartilhar conhecimento, curiosidades e imagens incríveis sobre o cosmos, estimulando a exploração e o aprendizado sobre astronomia, ciência e tecnologia espacial. Nossa missão é inspirar a próxima geração de exploradores do universo!
    </Texto>
    <Texto>
      Navegue pelos nossos temas cuidadosamente selecionados, descubra fatos surpreendentes sobre buracos negros, nebulosas, exoplanetas e muito mais! Mergulhe em uma galeria repleta de imagens de tirar o fôlego de planetas, estrelas, galáxias e outros fenômenos cósmicos, capturadas por telescópios e sondas espaciais. Prepare-se para se maravilhar com a beleza e a complexidade do universo!
    </Texto>
    <Texto>
        Junte-se a nós nesta jornada cósmica enquanto desvendamos os segredos do universo, uma estrela de cada vez! Explore artigos, vídeos e recursos interativos que te ajudarão a entender melhor o nosso lugar no cosmos.
    </Texto>
    <Imagem src="/imagens/galeria/foto-2.png" alt="Imagem do universo estrelado com uma galáxia espiral no centro" />
</Container>
);

export default Sobre; 