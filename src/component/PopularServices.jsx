import styled from 'styled-components';

const PopularServices = () => {

  const services = [
    {
      id: 'DTF',
      image: 'https://i.pinimg.com/564x/bf/bc/46/bfbc4649c7b5930b90fadae86c8dd769.jpg',
      title: 'Impresion DTF',
      description: 'Descripción breve del servicio 1 y sus beneficios.'
    },
    {
      id: 'Fotolitos',
      image: 'https://i.pinimg.com/564x/b5/67/b2/b567b25af64c155a8f59a45fbc831d09.jpg',
      title: 'Impresion Fotolitos',
      description: 'Descripción breve del servicio 1 y sus beneficios.'
    },
    {
      id: 'Tensado',
      image: 'https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/269957048_4447741072062464_6137008955302006060_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0Rssz5PMCn4AX_ObFBX&_nc_ht=scontent.fuio10-1.fna&oh=00_AfDXyWGudluxGA8LjMf4S7-lVCLP9fZyEW4bs8nJ83-TOw&oe=6605289A',
      title: 'Tensado de malla',
      description: 'Descripción breve del servicio 1 y sus beneficios.'
    },
    {
      id: 'Recuperacion',
      image: 'https://www.pixartprinting.es/blog/wp-content/uploads/2018/04/13.jpg',
      title: 'Recuperacion de malla',
      description: 'Descripción breve del servicio 1 y sus beneficios.'
    },
    {
      id: 'Emulsion',
      image: 'https://i.pinimg.com/564x/30/f3/e0/30f3e0e938e9a19ea39fcd6b1979464b.jpg',
      title: 'Emulsion de malla',
      description: 'Descripción breve del servicio 1 y sus beneficios.'
    },
    {
      id: 'Revelado',
      image: 'https://i.pinimg.com/564x/30/f3/e0/30f3e0e938e9a19ea39fcd6b1979464b.jpg',
      title: 'Revelado de malla',
      description: 'Descripción breve del servicio 1 y sus beneficios.'
    },
    {
      id: 'Vinil',
      image: 'https://i.pinimg.com/564x/30/f3/e0/30f3e0e938e9a19ea39fcd6b1979464b.jpg',
      title: 'Impresion de vinil',
      description: 'Descripción breve del servicio 1 y sus beneficios.'
    },

  ];

  return (
    <PopularServicesContainer>
      <SectionTitle>Servicios Populares</SectionTitle>
      <ServiceCardContainer>

        {services.map((service) => (
          <ServiceCard key={service.id}>
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}

      </ServiceCardContainer>
    </PopularServicesContainer>
  );
};

export default PopularServices;

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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  justify-items: center;
`;

const ServiceCard = styled.div`
  max-width: 300px;
  text-align: left;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 300px; // Ajusta este valor según tus necesidades
  object-fit: cover; // Esto asegura que la imagen cubra todo el espacio disponible sin distorsionarse
  border-radius: 8px;
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