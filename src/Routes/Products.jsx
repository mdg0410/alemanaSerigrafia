import { useState, useEffect } from "react";
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

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

const ItemTopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const ItemBottomRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ItemCountLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ItemDescription = styled.p`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const ItemOption = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const ItemCount = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const ItemTotal = styled.p`
  margin: 0;
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

const Products = () => {
  const shoppingCard = useSelector(selectShoppingCard);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <CartItem key={item.id}>
            <ItemTopRow>
              <ItemImage src={item.image} alt={item.description} />
              <ItemDescription>{item.description}</ItemDescription>
            </ItemTopRow>
            <ItemBottomRow>
              <ItemOption>{item.option}</ItemOption>
              <ItemCount>
                <ItemCountLabel>Cantidad:</ItemCountLabel>
                {item.count}
              </ItemCount>
              <ItemTotal>Total: {item.price * item.count}</ItemTotal>
            </ItemBottomRow>
          </CartItem>
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