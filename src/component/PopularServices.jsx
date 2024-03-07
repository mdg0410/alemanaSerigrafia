import styled from 'styled-components';

const PopularServicesContainer = styled.section`
  text-align: center;
  padding: 60px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #6A3F42; /* Color del texto del título */
`;

const ServiceCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const ServiceCard = styled.div`
  max-width: 300px;
  text-align: left;
`;

const ServiceImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #90668B; /* Color del texto del título del servicio */
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #908E89; /* Color del texto de la descripción del servicio */
`;

const PopularServices = () => {
  return (
    <PopularServicesContainer>
      <SectionTitle>Servicios Populares</SectionTitle>
      <ServiceCardContainer>
        <ServiceCard>
          <ServiceImage src="https://cdn.leonardo.ai/users/468f838e-6e35-4fcb-8e55-4783fd5660df/generations/9d840eda-ce21-46a1-a836-d345bbe729b8/Default_Disenio_para_camiseta_blanca_0.jpg" alt="Servicio 1" />
          <ServiceTitle>Servicio 1</ServiceTitle>
          <ServiceDescription>Descripción breve del servicio 1 y sus beneficios.</ServiceDescription>
        </ServiceCard>
        {/* Repite este bloque para cada servicio */}
        <ServiceCard>
          <ServiceImage src="https://cdn.leonardo.ai/users/468f838e-6e35-4fcb-8e55-4783fd5660df/generations/4848e0f2-3a9c-4ac9-a082-74a50f5634c6/Default_Disenio_para_camiseta_urbano_en_blackwork_0.jpg" alt="Servicio 2" />
          <ServiceTitle>Servicio 2</ServiceTitle>
          <ServiceDescription>Descripción breve del servicio 2 y sus beneficios.</ServiceDescription>
        </ServiceCard>
      </ServiceCardContainer>
    </PopularServicesContainer>
  );
};

export default PopularServices;
