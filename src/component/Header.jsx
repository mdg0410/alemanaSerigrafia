import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #90668B; /* Color principal del encabezado */
  color: #F2F2F2; /* Color del texto en el encabezado */
  padding: 80px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Tu Tienda de Serigrafía</Title>
      <Subtitle>Transformamos tus ideas en obras de arte impresas</Subtitle>
    </HeaderContainer>
  );
};

export default Header;