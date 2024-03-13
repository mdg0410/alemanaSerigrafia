import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh; /* Altura para dispositivos móviles */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #F2F2F2; /* Color del texto en el encabezado */

  @media screen and (min-width: 768px) {
    height: 75vh; /* Altura para laptops */
  }

  @media screen and (min-width: 1024px) {
    height: 80vh; /* Altura para TVs */
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Asegura que el video esté detrás del contenido */
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translate(-50%, -50%);
  pointer-events: none; /* Deshabilita los eventos del ratón en el video */
`;

const Title = styled.h1`
  z-index: 1;
  font-size: 2em; /* Tamaño de fuente para dispositivos móviles */

  @media screen and (min-width: 768px) {
    font-size: 3em; /* Tamaño de fuente para laptops */
  }

  @media screen and (min-width: 1024px) {
    font-size: 4em; /* Tamaño de fuente para TVs */
  }
`;

const Paragraph = styled.p`
  z-index: 1;
  font-size: 1em; /* Tamaño de fuente para dispositivos móviles */

  @media screen and (min-width: 768px) {
    font-size: 1.5em; /* Tamaño de fuente para laptops */
  }

  @media screen and (min-width: 1024px) {
    font-size: 2em; /* Tamaño de fuente para TVs */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <VideoContainer>
      <Video
          src="https://www.shutterstock.com/shutterstock/videos/1035102080/preview/stock-footage-man-close-up-preparing-t-shirt-for-printing-in-the-silk-screen-printing-machine-only-hands-man.webm"
          autoPlay
          loop
          muted
          playsInline
        />
      </VideoContainer>
      <Title>Título del video</Title>
      <Paragraph>Este es un pequeño párrafo sobre el video.</Paragraph>
    </HeaderContainer>
  );
};

export default Header;