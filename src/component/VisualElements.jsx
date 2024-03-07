import styled from 'styled-components';

const VisualElementsContainer = styled.section`
  text-align: center;
  padding: 60px 20px;
`;

const VisualElementsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #6A3F42; /* Color del texto del título */
`;

const VisualElementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const VisualElement = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  &:hover img {
    transform: scale(1.1);
  }
`;

const VisualElementImage = styled.img`
  width: 100%;
  transition: transform 0.5s ease;
`;

const VisualElements = () => {
  return (
    <VisualElementsContainer>
      <VisualElementsTitle>Elementos Visuales Impactantes</VisualElementsTitle>
      <VisualElementsGrid>
        <VisualElement>
          <VisualElementImage src="https://cdn.leonardo.ai/users/468f838e-6e35-4fcb-8e55-4783fd5660df/generations/d772c200-294f-4246-b748-222c2d6954cc/Default_Disenio_para_camiseta_negra_0.jpg" alt="Elemento Visual 2" />
        </VisualElement>
        <VisualElement>
          <VisualElementImage src="https://cdn.leonardo.ai/users/468f838e-6e35-4fcb-8e55-4783fd5660df/generations/9c078a18-2092-42bb-ac81-937db395fddf/Default_Disenio_para_camiseta_urbano_para_dtf_3.jpg" alt="Elemento Visual 2" />
        </VisualElement>
        <VisualElement>
          <VisualElementImage src="https://cdn.leonardo.ai/users/468f838e-6e35-4fcb-8e55-4783fd5660df/generations/9c078a18-2092-42bb-ac81-937db395fddf/Default_Disenio_para_camiseta_urbano_para_dtf_2.jpg" alt="Elemento Visual 2" />
        </VisualElement>
        <VisualElement>
          <VisualElementImage src="https://cdn.leonardo.ai/users/468f838e-6e35-4fcb-8e55-4783fd5660df/generations/9c078a18-2092-42bb-ac81-937db395fddf/Default_Disenio_para_camiseta_urbano_para_dtf_1.jpg" alt="Elemento Visual 2" />
        </VisualElement>
        <VisualElement>
          <VisualElementImage src="https://cdn.leonardo.ai/users/468f838e-6e35-4fcb-8e55-4783fd5660df/generations/9c078a18-2092-42bb-ac81-937db395fddf/Default_Disenio_para_camiseta_urbano_para_dtf_0.jpg" alt="Elemento Visual 2" />
        </VisualElement>
      </VisualElementsGrid>
    </VisualElementsContainer>
  );
};

export default VisualElements;