import { useState } from 'react';
import styled from 'styled-components';

const ExtendedContactFormContainer = styled.section`
  background-color: #F2F2F2; /* Color de fondo para la sección del formulario ampliado */
  text-align: center;
  padding: 60px 20px;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #6A3F42; /* Color del texto del título */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #6A3F42; /* Color del borde del input */
  border-radius: 5px;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #6A3F42; /* Color del borde del desplegable */
  border-radius: 5px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #6A3F42; /* Color del borde del textarea */
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

const ExtendedContactForm = () => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <ExtendedContactFormContainer>
      <FormTitle>Contacto Ampliado</FormTitle>
      <Form>
        <FormInput type="text" placeholder="Nombre" />
        <FormInput type="email" placeholder="Correo Electrónico" />
        <FormInput type="tel" placeholder="Número de Teléfono" />
        <FormSelect value={selectedState} onChange={handleStateChange}>
          <option value="" disabled selected>
            Selecciona tu Estado
          </option>
          <option value="estado1">Estado 1</option>
          <option value="estado2">Estado 2</option>
          {/* Agrega más opciones según sea necesario */}
        </FormSelect>
        <FormInput type="text" placeholder="Tipo de Proyecto" />
        <FormTextarea placeholder="Detalles Específicos del Proyecto" />
        <FormButton>Iniciar Conversación</FormButton>
      </Form>
    </ExtendedContactFormContainer>
  );
};

export default ExtendedContactForm;