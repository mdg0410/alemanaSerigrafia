import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #F2F2F2; /* Color de fondo para el pie de página */
  padding: 40px 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Tres columnas para los enlaces rápidos */
  gap: 40px;
`;

const QuickLinks = styled.div`
  text-align: left;
`;

const QuickLinksTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #6A3F42; /* Color del texto del título de enlaces rápidos */
`;

const QuickLink = styled.a`
  display: block;
  font-size: 1.2rem;
  color: #90668B; /* Color del texto de los enlaces rápidos */
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LegalLinks = styled.div`
  text-align: left;
`;

const LegalLinksTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #6A3F42; /* Color del texto del título de enlaces legales */
`;

const LegalLink = styled.a`
  display: block;
  font-size: 1.2rem;
  color: #90668B; /* Color del texto de los enlaces legales */
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NewsletterCTA = styled.div`
  text-align: left;
  margin-top: 20px;
`;

const NewsletterTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #6A3F42; /* Color del texto del título de la CTA del boletín */
`;

const NewsletterText = styled.p`
  font-size: 1.2rem;
  color: #908E89; /* Color del texto de la CTA del boletín */
  margin-bottom: 10px;
`;

const SubscribeButton = styled.button`
  background-color: #90668B; /* Color del botón de la CTA del boletín */
  color: #F2F2F2; /* Color del texto del botón de la CTA del boletín */
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6A3F42; /* Cambio de color al pasar el mouse */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <QuickLinks>
          <QuickLinksTitle>Enlaces Rápidos</QuickLinksTitle>
          <QuickLink href="#seccion1">Sección 1</QuickLink>
          <QuickLink href="#seccion2">Sección 2</QuickLink>
          {/* Agrega más enlaces rápidos según sea necesario */}
        </QuickLinks>

        <LegalLinks>
          <LegalLinksTitle>Enlaces Legales</LegalLinksTitle>
          <LegalLink href="/terminos">Términos y Condiciones</LegalLink>
          <LegalLink href="/privacidad">Política de Privacidad</LegalLink>
          {/* Agrega más enlaces legales según sea necesario */}
        </LegalLinks>

        <NewsletterCTA>
          <NewsletterTitle>Suscríbete a Nuestro Boletín</NewsletterTitle>
          <NewsletterText>
            Recibe actualizaciones exclusivas y promociones especiales directamente en tu bandeja de entrada.
          </NewsletterText>
          <SubscribeButton as={Link} to='/Contact'>Suscribirse</SubscribeButton>
        </NewsletterCTA>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;