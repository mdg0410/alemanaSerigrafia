import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  background-color: #F2F2F2; /* Color de fondo para la sección de testimonios */
  text-align: center;
  padding: 60px 20px;
`;

const TestimonialsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #6A3F42; /* Color del texto del título */
`;

const TestimonialCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const TestimonialCard = styled.div`
  max-width: 300px;
  text-align: left;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorName = styled.span`
  font-weight: bold;
`;

const TestimonialsSection = () => {
  return (
    <TestimonialsContainer>
      <TestimonialsTitle>Testimonios y Reseñas</TestimonialsTitle>
      <TestimonialCardContainer>
        <TestimonialCard>
          <TestimonialText>Excelente calidad en cada impresión, ¡superaron mis expectativas!</TestimonialText>
          <TestimonialAuthor>
            <AuthorAvatar src="url_avatar_cliente1.jpg" alt="Avatar Cliente 1" />
            <AuthorName>Cliente Satisfecho 1</AuthorName>
          </TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>Excelente calidad en cada impresión, ¡superaron mis expectativas!</TestimonialText>
          <TestimonialAuthor>
            <AuthorAvatar src="url_avatar_cliente1.jpg" alt="Avatar Cliente 1" />
            <AuthorName>Cliente Satisfecho 1</AuthorName>
          </TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>Excelente calidad en cada impresión, ¡superaron mis expectativas!</TestimonialText>
          <TestimonialAuthor>
            <AuthorAvatar src="url_avatar_cliente1.jpg" alt="Avatar Cliente 1" />
            <AuthorName>Cliente Satisfecho 1</AuthorName>
          </TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>Excelente calidad en cada impresión, ¡superaron mis expectativas!</TestimonialText>
          <TestimonialAuthor>
            <AuthorAvatar src="url_avatar_cliente1.jpg" alt="Avatar Cliente 1" />
            <AuthorName>Cliente Satisfecho 1</AuthorName>
          </TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>Excelente calidad en cada impresión, ¡superaron mis expectativas!</TestimonialText>
          <TestimonialAuthor>
            <AuthorAvatar src="url_avatar_cliente1.jpg" alt="Avatar Cliente 1" />
            <AuthorName>Cliente Satisfecho 1</AuthorName>
          </TestimonialAuthor>
        </TestimonialCard>
        {/* Repite este bloque para cada testimonio */}
        <TestimonialCard>
          <TestimonialText>Rápidos, eficientes y con atención personalizada. ¡Volveré por más!</TestimonialText>
          <TestimonialAuthor>
            <AuthorAvatar src="url_avatar_cliente2.jpg" alt="Avatar Cliente 2" />
            <AuthorName>Cliente Satisfecho 2</AuthorName>
          </TestimonialAuthor>
        </TestimonialCard>
      </TestimonialCardContainer>
      {/* Puedes agregar más testimonios y reseñas según sea necesario */}
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;