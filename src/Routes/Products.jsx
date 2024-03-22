import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import products from "../logic/faker";
import CardItem from "../component/CardItem";
import styled from "styled-components";
import { selectShoppingCard, removeItemFromCard, clearAllItemsFromCard, updateItemCount, setProctuctsToWhastApp } from "../redux/slice/shoppingCardSlice";

const Products = () => {
  const dispatch = useDispatch();
  const shoppingCard = useSelector(selectShoppingCard);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const totalShopping = shoppingCard.items.reduce((acc, item) => acc + item.price * item.count, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTotal(totalShopping);
  }, [totalShopping]);

  // Aca se puede quitar el overflow para el body
  // useEffect(() => {
  //   if (isCartOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [isCartOpen]);

  const handleCartOpen = () => {
    setIsCartOpen(isCartOpen => !isCartOpen);
  };

  const handleRemoveItemFromCard = (id) => {
    dispatch(removeItemFromCard(id));
  }

  const handleUpdateItemCount = (product, count) => {
    dispatch(updateItemCount({product, count}));
  }

  const handleSetProctuctsToWhastApp = () => {
    if (total === 0) {
      return alert("No hay productos en el carrito");
    } else {
      dispatch(setProctuctsToWhastApp());
    }
  }

  return (
    <div>
    {!isCartOpen && <OpenButton onClick={handleCartOpen}>Open</OpenButton>}
      {isCartOpen && (
        <Sidebar>
        <button onClick={handleCartOpen}>Cerrar</button>
        <button onClick={() => dispatch(clearAllItemsFromCard())}>Vaciar</button>
        <div>
          {shoppingCard.items.map((item) => (
            <CartItem key={item.product}>
            <ItemTopRow>
              <ItemImage src={item.image} alt={item.description} />
              <ItemDescription>{item.description}</ItemDescription>
            </ItemTopRow>
            <ItemBottomRow>
              <ItemOption>{item.option}</ItemOption>
              <ItemCount>
                <ItemCountLabel>Cantidad:</ItemCountLabel>
                <input
                  type="number"
                  min="1"
                  value={item.count}
                  onChange={(e) => {
                    const count = Number(e.target.value);
                    handleUpdateItemCount(item.product, count);
                  }}
                />
              </ItemCount>
              <ItemTotal>Total: {item.price * item.count}</ItemTotal>
            </ItemBottomRow>
            <button onClick={() => handleRemoveItemFromCard(item.product)}>Eliminar</button>
            </CartItem>
          ))}
          <p>{total}</p>
          <button onClick={() => dispatch(handleSetProctuctsToWhastApp)}>Enviar a WhatsApp</button>
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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const OpenButton = styled.button`
  position: fixed;
  top: 50%;
  right: -2%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
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
  overflow-y: auto;
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