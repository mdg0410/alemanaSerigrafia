import styled from 'styled-components';

const SpecialOffersContainer = styled.section`
  background-color: #F2F2F2; /* Color de fondo para la sección de ofertas especiales */
  text-align: center;
  padding: 60px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #6A3F42; /* Color del texto del título */
`;

const OfferCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const OfferCard = styled.div`
  max-width: 300px;
  text-align: left;
  border: 1px solid #908E89; /* Color del borde de la tarjeta de oferta */
  border-radius: 8px;
  padding: 20px;
`;

const OfferTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #90668B; /* Color del texto del título de la oferta */
`;

const OfferDescription = styled.p`
  font-size: 1rem;
  color: #908E89; /* Color del texto de la descripción de la oferta */
  margin-bottom: 15px;
`;

const OfferButton = styled.button`
  background-color: #90668B; /* Color del botón de la oferta */
  color: #F2F2F2; /* Color del texto del botón de la oferta */
  padding: 12px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6A3F42; /* Cambio de color al pasar el mouse */
  }
`;

const SpecialOffers = () => {
  return (
    <SpecialOffersContainer>
      <SectionTitle>Ofertas Especiales y Descuentos</SectionTitle>
      <OfferCardContainer>
        <OfferCard>
          <OfferTitle>Oferta Especial 1</OfferTitle>
          <OfferDescription>Descripción breve de la oferta especial y sus beneficios.</OfferDescription>
          <OfferButton>¡Aprovechar Ahora!</OfferButton>
        </OfferCard>
        {/* Repite este bloque para cada oferta especial */}
        <OfferCard>
          <OfferTitle>Oferta Especial 2</OfferTitle>
          <OfferDescription>Descripción breve de la oferta especial y sus beneficios.</OfferDescription>
          <OfferButton>¡Aprovechar Ahora!</OfferButton>
        </OfferCard>
      </OfferCardContainer>
    </SpecialOffersContainer>
  );
};

export default SpecialOffers;