import { useState } from "react";
import { useSelector } from "react-redux";
import products from "../logic/faker";
import CardItem from "../component/CardItem";
import styled from "styled-components";
import { selectShoppingCard } from "../redux/slice/shoppingCardSlice";
  
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 100;
`;

const Products = () => {
  const shoppingCard = useSelector(selectShoppingCard);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
    // Aquí puedes agregar la lógica para guardar el carrito
  };

  return (
    <div>
      <button 
        onClick={isCartOpen ? handleCartClose : handleCartOpen} 
        style={{ position: 'absolute',top: '50%' , right: 0, width: '50px', height: '50px' }}
      >
        {`<<`}
      </button>
      {isCartOpen && (
        <Sidebar>
          <button onClick={handleCartClose}>Cerrar</button>
          <div>
            {shoppingCard.items.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.description} />
                <p>{item.description}</p>
                <p>{item.option}</p>
                <p>{item.count}</p>
                <p>Total: {item.price*item.count}</p>
              </div>
            ))}
          </div>
        </Sidebar>
      )}
    <CardContainer>
      {products.map((product) => (
        <CardItem key={product.id} id={product.id} image={product.image} description={product.description} price={product.price} />
      ))}
    </CardContainer>
    </div>
  );
}

export default Products;