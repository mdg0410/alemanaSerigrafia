import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CallToActionContainer = styled.section`
  background-color: #EBD6B9; /* Color de fondo para la sección de llamado a la acción */
  text-align: center;
  padding: 60px 20px;
`;

const CtaTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #6A3F42; /* Color del texto del llamado a la acción */
`;

const CtaButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const CtaButton = styled.button`
  background-color: #90668B; /* Color del botón del llamado a la acción */
  color: #F2F2F2; /* Color del texto del botón del llamado a la acción */
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6A3F42; /* Cambio de color al pasar el mouse */
  }
`;

const CallToAction = () => {
  return (
    <CallToActionContainer>
      <CtaTitle>Descubre Nuestros Servicios</CtaTitle>
      <CtaButtonContainer>
        <CtaButton as={Link} to='/Products'>Ver Productos</CtaButton>
      </CtaButtonContainer>
    </CallToActionContainer>
  );
};

export default CallToAction;