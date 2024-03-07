import styled from 'styled-components';

const GuaranteesContainer = styled.section`
  background-color: #F2F2F2; /* Color de fondo para la sección de garantías y compromisos */
  text-align: center;
  padding: 60px 20px;
`;

const GuaranteesTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #6A3F42; /* Color del texto del título */
`;

const GuaranteeCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const GuaranteeCard = styled.div`
  max-width: 300px;
  text-align: left;
`;

const GuaranteeIcon = styled.div`
  font-size: 2rem;
  color: #90668B; /* Color del icono de la garantía */
  margin-bottom: 15px;
`;

const GuaranteeTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #6A3F42; /* Color del texto del título de la garantía */
`;

const GuaranteeDescription = styled.p`
  font-size: 1rem;
  color: #908E89; /* Color del texto de la descripción de la garantía */
`;

const Guarantees = () => {
  return (
    <GuaranteesContainer>
      <GuaranteesTitle>Garantías y Compromisos</GuaranteesTitle>
      <GuaranteeCardContainer>
        <GuaranteeCard>
          <GuaranteeIcon>✓</GuaranteeIcon>
          <GuaranteeTitle>Satisfacción Garantizada</GuaranteeTitle>
          <GuaranteeDescription>
            Estamos comprometidos a garantizar tu satisfacción con cada pedido.
          </GuaranteeDescription>
        </GuaranteeCard>
        {/* Repite este bloque para cada garantía */}
        <GuaranteeCard>
          <GuaranteeIcon>✓</GuaranteeIcon>
          <GuaranteeTitle>Entrega a Tiempo</GuaranteeTitle>
          <GuaranteeDescription>
            Cumplimos con los plazos de entrega para que recibas tus productos a tiempo.
          </GuaranteeDescription>
        </GuaranteeCard>
      </GuaranteeCardContainer>
    </GuaranteesContainer>
  );
};

export default Guarantees;