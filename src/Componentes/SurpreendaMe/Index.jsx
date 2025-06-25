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
`;
const Titulo = styled.h1`
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 24px;
  text-align: center;
`;
const Imagem = styled.img`
  width: 100%;
  max-width: 400px;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 auto 8px auto;
  display: block;
`;
const Descricao = styled.p`
  color: #fff;
  font-size: 1.05rem;
  margin-bottom: 32px;
  text-align: center;
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