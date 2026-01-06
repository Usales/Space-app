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
    box-sizing: border-box;

    @media (max-width: 1024px) {
        min-height: 280px;
        border-radius: 16px;
    }

    @media (max-width: 768px) {
        min-height: 240px;
        border-radius: 12px;
    }

    @media (max-width: 480px) {
        min-height: 200px;
        border-radius: 10px;
    }
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

    @media (max-width: 1024px) {
        font-size: 36px;
        line-height: 42px;
        padding: 0 48px;
    }

    @media (max-width: 768px) {
        padding: 0 24px;
        font-size: 28px;
        line-height: 34px;
        max-width: 100%;
    }

    @media (max-width: 480px) {
        padding: 0 16px;
        font-size: 24px;
        line-height: 30px;
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

