import styled from "styled-components";
import { useMemo } from "react";
import fotos from "../../fotos.json";

const Container = styled.section`
  max-width: 700px;
  margin: 40px auto;
  padding: 32px;
  background: #0b1a2f;
  border-radius: 16px;
  box-shadow: 0 4px 24px #0002;
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
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.9rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 16px;
  }
`;
const Imagem = styled.img`
  width: 100%;
  max-width: 400px;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 auto 8px auto;
  display: block;

  @media (max-width: 768px) {
    height: 200px;
    border-radius: 12px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    height: 180px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
`;
const Descricao = styled.p`
  color: #fff;
  font-size: 1.05rem;
  margin-bottom: 32px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
`;

const textosCuriosos = [
  "Você sabia? Esta imagem foi capturada por um telescópio que orbita a 500 km acima da Terra!",
  "Curiosidade: A luz desta galáxia levou milhões de anos para chegar até nós.",
  "Fato Surpreendente: O objeto nesta foto é maior do que todo o sistema solar!",
  "Incrível: Esta nebulosa é uma verdadeira fábrica de estrelas.",
  "Sabia que? O brilho visto aqui é resultado de uma explosão estelar antiga."
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const SurpreendaMe = () => {
  const fotoAleatoria = useMemo(() => fotos[getRandomInt(fotos.length)], []);
  const textoAleatorio = useMemo(() => textosCuriosos[getRandomInt(textosCuriosos.length)], []);

  return (
    <Container>
      <Titulo>Surpreenda-me!</Titulo>
      <Imagem src={fotoAleatoria.path} alt={fotoAleatoria.titulo} />
      <Descricao>{textoAleatorio}</Descricao>
    </Container>
  );
};

export default SurpreendaMe; 