import styled from "styled-components";

const Container = styled.section`
  max-width: 700px;
  margin: 40px auto;
  padding: 32px;
  background: #0b1a2f;
  border-radius: 16px;
  box-shadow: 0 4px 24px #0002;
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

const fotosPopulares = [
  {
    id: 1,
    titulo: "Foto 1",
    path: "/imagens/populares/foto-1.png",
    descricao: "A galáxia espiral NGC 1300, localizada a 61 milhões de anos-luz, encanta astrônomos com seus braços perfeitamente definidos."
  },
  {
    id: 2,
    titulo: "Foto 2",
    path: "/imagens/populares/foto-2.png",
    descricao: "A Nebulosa do Pato de Borracha, famosa por suas cores vibrantes e formato curioso, é um dos objetos mais fotografados do universo."
  },
  {
    id: 3,
    titulo: "Foto 3",
    path: "/imagens/populares/foto-3.png",
    descricao: "Aqui nos foi mostrado a Lua em sua maior proximidade com a terra nos últimos 369 mil anos."
  },
  {
    id: 4,
    titulo: "Foto 4",
    path: "/imagens/populares/foto-4.png",
    descricao: "Sonda Hover registrou fotos das dunas vermelhas de Marte."
  },
  {
    id: 5,
    titulo: "Foto 5",
    path: "/imagens/populares/foto-5.png",
    descricao: "O astronauta Yuri, em missão histórica, capturou esta imagem da Terra nascendo sobre a Lua. Um marco da exploração espacial."
  }
];

const MaisCurtidas = () => (
  <Container>
    <Titulo>Mais Curtidas</Titulo>
    {fotosPopulares.map(foto => (
      <div key={foto.id}>
        <Imagem src={foto.path} alt={foto.titulo} />
        <Descricao>{foto.descricao}</Descricao>
      </div>
    ))}
  </Container>
);

export default MaisCurtidas; 