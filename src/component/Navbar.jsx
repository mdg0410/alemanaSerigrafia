import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #006699; /* Color principal del navbar */
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: #EBD6B9; /* Color de acento para el logo */
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  color: #EBD6B9; /* Color de acento para los enlaces del navbar */
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <NavbarContainer>
      <Logo>TuLogo</Logo>
      <NavLinks>
        <NavLink href="#">Inicio</NavLink>
        <NavLink href="#">Productos</NavLink>
        <NavLink href="#">Servicios</NavLink>
        <NavLink href="#">Contacto</NavLink>
      </NavLinks>
    </NavbarContainer>
  )
}

export default NavBar