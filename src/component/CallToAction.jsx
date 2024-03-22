import styled from 'styled-components';
import { Link } from 'react-router-dom';

import printop from '../assets/printop.png';
import ulano from '../assets/ulano.gif';
import alcoplast from '../assets/alcoplast.svg';

const CallToAction = () => {
  
  const brands = [
    printop,
    ulano,
    alcoplast,
  ]

  return (
    <CallToActionContainer>
      <CtaTitle>Descubre Nuestros Productos</CtaTitle>
      <BrandsContainer>
        {brands.map((brand, index) => (
          <Brand key={index}>
            <img src={brand} alt={`Brand ${index + 1}`} />
          </Brand>
        ))}
      </BrandsContainer>
      <CtaButtonContainer>
        <CtaButton as={Link} to='/Products'>Ver Productos</CtaButton>
      </CtaButtonContainer>
    </CallToActionContainer>
  );
};

export default CallToAction;

const CallToActionContainer = styled.section`
  background-color: #EBD6B9;
  text-align: center;
  padding: 60px 20px;
`;

const CtaTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #6A3F42;
`;

const BrandsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const Brand = styled.div`
  width: 100px; // Puedes ajustar esto según el tamaño de tus imágenes
  height: 100px; // Puedes ajustar esto según el tamaño de tus imágenes

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CtaButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const CtaButton = styled.button`
  background-color: #90668B;
  color: #F2F2F2;
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6A3F42;
  }
`;