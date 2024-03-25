import styled from 'styled-components';

const ContactFormContainer = styled.section`
  background-color: #90668B; /* Color de fondo para la sección del formulario */
  text-align: center;
  color: #F2F2F2; /* Color del texto en el formulario */
  padding: 60px 20px;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  width: 30%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #F2F2F2; /* Color del borde del input */
  border-radius: 5px;
`;

const FormButton = styled.button`
  background-color: #6A3F42; /* Color del botón del formulario */
  color: #F2F2F2; /* Color del texto del botón del formulario */
  padding: 15px 30px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #90668B; /* Cambio de color al pasar el mouse */
  }
`;

const ContactForm = () => {
  return (
    <ContactFormContainer>
      <FormTitle>Contáctanos</FormTitle>
      <Form>
        <FormInput type="text" placeholder="Nombre" />
        <FormInput type="email" placeholder="Correo Electrónico" />
        <FormInput type="tel" placeholder="Número de Teléfono" />
        {/* Puedes agregar más campos según sea necesario */}
        <FormButton>Enviar Mensaje</FormButton>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;