import styled from 'styled-components';

const ContactAndSocialContainer = styled.section`
  text-align: center;
  background-color: #F2F2F2; /* Color de fondo para la sección de información de contacto y redes sociales */
  padding: 60px 20px;
`;

const ContactDetails = styled.div`
  margin-bottom: 40px;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #6A3F42; /* Color del texto del título */
`;

const ContactInfo = styled.p`
  font-size: 1.2rem;
  color: #908E89; /* Color del texto de la información de contacto */
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const SocialLink = styled.a`
  font-size: 2rem;
  color: #6A3F42; /* Color de los iconos de redes sociales */
`;

const FollowCTA = styled.p`
  font-size: 1.2rem;
  color: #6A3F42; /* Color del texto del CTA de seguir en redes sociales */
`;

const ContactAndSocial = () => {
  return (
    <ContactAndSocialContainer>
      <ContactDetails>
        <ContactTitle>Información de Contacto</ContactTitle>
        <ContactInfo>
          Dirección: Tu Dirección <br />
          Teléfono: Tu Número de Teléfono <br />
          Correo Electrónico: Tu Correo Electrónico
        </ContactInfo>
      </ContactDetails>

      <SocialLinksContainer>
        <SocialLink href="url_red_social_1" target="_blank" rel="noopener noreferrer">
          {/* Icono de la primera red social (puedes usar FontAwesome u otro conjunto de iconos) */}
          <i className="icon-facebook"></i>
        </SocialLink>
        {/* Repite este bloque para cada red social */}
        <SocialLink href="url_red_social_2" target="_blank" rel="noopener noreferrer">
          {/* Icono de la segunda red social */}
          <i className="icon-twitter"></i>
        </SocialLink>
      </SocialLinksContainer>

      <FollowCTA>Síguenos en redes sociales para recibir actualizaciones exclusivas y promociones especiales.</FollowCTA>
    </ContactAndSocialContainer>
  );
};

export default ContactAndSocial;