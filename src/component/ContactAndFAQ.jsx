import styled from 'styled-components';

const ContactAndFAQContainer = styled.section`
  text-align: center;
  padding: 60px 20px;
`;

const ContactFormContainer = styled.div`
  margin-bottom: 40px;
`;

const ContactFormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #6A3F42; /* Color del texto del título */
`;

const ContactFormLink = styled.a`
  font-size: 1.2rem;
  color: #90668B; /* Color del texto del enlace */
  text-decoration: underline;
  cursor: pointer;
`;

const FAQContainer = styled.div`
  text-align: left;
`;

const FAQQuestion = styled.div`
  margin-bottom: 20px;
`;

const FAQQuestionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #6A3F42; /* Color del texto del título de la pregunta */
  cursor: pointer;
`;

const FAQAnswer = styled.p`
  font-size: 1rem;
  color: #908E89; /* Color del texto de la respuesta de la pregunta */
  display: none;
`;

const ContactAndFAQ = () => {
  const toggleFAQ = (index) => {
    const faqAnswer = document.getElementById(`faq-answer-${index}`);
    faqAnswer.style.display === 'none'
      ? (faqAnswer.style.display = 'block')
      : (faqAnswer.style.display = 'none');
  };

  return (
    <ContactAndFAQContainer>
      <ContactFormContainer>
        <ContactFormTitle>Formulario de Contacto Ampliado</ContactFormTitle>
        <p>
          ¿Listo para empezar? Completa nuestro{' '}
          <ContactFormLink href="url_del_formulario_completo">formulario de contacto completo</ContactFormLink> con
          información detallada sobre tu proyecto.
        </p>
      </ContactFormContainer>

      <FAQContainer>
        <h2>Preguntas Frecuentes</h2>
        <FAQQuestion>
          <FAQQuestionTitle onClick={() => toggleFAQ(1)}>¿Cuál es el tiempo de entrega?</FAQQuestionTitle>
          <FAQAnswer id="faq-answer-1">
            El tiempo de entrega varía según la complejidad del proyecto. Contáctanos para obtener una estimación
            específica.
          </FAQAnswer>
        </FAQQuestion>
        {/* Repite este bloque para cada pregunta frecuente */}
        <FAQQuestion>
          <FAQQuestionTitle onClick={() => toggleFAQ(2)}>¿Cómo puedo solicitar un presupuesto?</FAQQuestionTitle>
          <FAQAnswer id="faq-answer-2">
            Puedes solicitar un presupuesto completando nuestro formulario de contacto o llamándonos al
            [Número de Teléfono].
          </FAQAnswer>
        </FAQQuestion>
      </FAQContainer>
    </ContactAndFAQContainer>
  );
};

export default ContactAndFAQ;