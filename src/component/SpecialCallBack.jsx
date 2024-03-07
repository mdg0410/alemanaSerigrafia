import styled from 'styled-components';

const StrategicCTAContainer = styled.section`
  text-align: center;
  padding: 60px 20px;
`;

const StrategicCTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #6A3F42; /* Color del texto del título */
`;

const StrategicCTAText = styled.p`
  font-size: 1.2rem;
  color: #908E89; /* Color del texto del CTA estratégico */
  margin-bottom: 30px;
`;

const StrategicCTAButton = styled.button`
  background-color: #90668B; /* Color del botón del CTA estratégico */
  color: #F2F2F2; /* Color del texto del botón del CTA estratégico */
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6A3F42; /* Cambio de color al pasar el mouse */
  }
`;

const StrategicCTA = () => {
  return (
    <StrategicCTAContainer>
      <StrategicCTATitle>Descubre cómo podemos mejorar tu imagen hoy mismo</StrategicCTATitle>
      <StrategicCTAText>
        Nuestro compromiso es ofrecerte servicios de serigrafía de la más alta calidad. Descubre cómo podemos
        transformar tu visión en realidad y mejorar tu imagen hoy mismo.
      </StrategicCTAText>
      <StrategicCTAButton>Mejora tu Imagen</StrategicCTAButton>
    </StrategicCTAContainer>
  );
};

export default StrategicCTA;