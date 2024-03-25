import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdMenu, MdClose } from 'react-icons/md';
import { selectNavbar, toggleNavbar } from '../redux/slice/navbarSlice';

const NavbarContainer = styled.nav`
  background-color: #0a0a0a; /* Color principal del navbar */
  display: flex;
  width: 100%;
`;

const Navbar = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  width: 99%;
`;

const Logo = styled.div`
  color: #EBD6B9; /* Color de acento para el logo */
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Noto Sans JP", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
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

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

const SideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #333;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

const NavItems = () => {
  return (
    <NavLinks>
      <NavLink as={Link} to='/'>Inicio</NavLink>
      <NavLink as={Link} to='/Products'>Productos</NavLink>
      <NavLink as={Link} to='/Services'>Servicios</NavLink>
      <NavLink as={Link} to='/Contact'>Contacto</NavLink>
    </NavLinks>
  )

}

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectNavbar);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <NavbarContainer>
      <Navbar>
        <Logo>TuLogo</Logo>

        {windowWidth <= 768 ? (
          <>
          <button type='button' onClick={() => dispatch(toggleNavbar())}>
            {!isOpen && <MdMenu size={24} /> }
          </button>
          {isOpen && (
            <SideBar>
              <button type='button'><MdClose size={24} onClick={() => dispatch(toggleNavbar())} /></button>
              <NavItems />
            </SideBar>
          )}
          </>
        ) : (
          <NavItems />
        )}

      </Navbar>
    </NavbarContainer>
  )
}

export default NavBar