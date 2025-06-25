import styled from "styled-components";

const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 24px;
    width: 100%;
    justify-content: center;
    animation: slideDownFade 1.1s cubic-bezier(0.23, 1, 0.32, 1);

    @media (max-width: 768px) {
        gap: 0;
        width: 100%;
        min-width: 0;
        margin-left: 0;
        margin-right: 0;
    }
`;

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
    background-position: center;
    justify-content: center;
    width: 100%;
    min-width: 0;
`;

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
    margin: 0;
    text-align: center;
    @media (max-width: 768px) {
        padding: 0 16px;
        font-size: 28px;
    }
`;

const Banner = ({ texto, backgroundImage }) => {
    return (
        <BannerContainer>
            <FigureEstilizada $backgroundImage={backgroundImage}>
                <TituloEstilizado>{texto}</TituloEstilizado>
            </FigureEstilizada>
        </BannerContainer>
    );
};

export default Banner;

