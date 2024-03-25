import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCard } from "../redux/slice/shoppingCardSlice";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: 0.3s ease-in-out;
  cursor: pointer;
`;

const Imagen = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

// eslint-disable-next-line react/prop-types
const CardItem = ({ id, image, description, price }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const [itemCount, setItemCount] = useState(1);

  const handleChangeOption = (option) => {
    setSelectedOption(option);
  };

  const handleAddToCart = (id, image, description, option, count, price) => {
    const product = `${id}/${option}`
    dispatch(addItemToCard({
      product,
      image,
      description,
      option,
      count,
      price,
    }));
    setSelectedOption(null);
    setItemCount(1);
  }

  return (
    <Card className="card">
      <Imagen src={image} alt={description} />
      <p>{description}</p>
      <div>
        <input 
          type="radio"
          id={`option1-${id}`}
          name={`option-${id}`}
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={() => handleChangeOption('option1')}
        />
        <label htmlFor={`option1-${id}`}>Option 1</label>
        <input
          type="radio"
          id={`option2-${id}`}
          name={`option-${id}`}
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={() => handleChangeOption('option2')}
        />
        <label htmlFor={`option2-${id}`}>Option 2</label>
        <input
          type="radio"
          id={`option3-${id}`}
          name={`option-${id}`}
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={() => handleChangeOption('option3')}
        />
        <label htmlFor={`option3-${id}`}>Option 3</label>
      </div>
      <div style={{display: 'flex', gap: '3vh'}}>
        <div style={{display: 'flex', gap: '1vh'}}>
          <button onClick={() => itemCount > 1 && setItemCount(itemCount - 1)}>-</button>
          <span>{itemCount}</span>
          <button onClick={() => setItemCount(itemCount + 1)}>+</button>
        </div>
        <div>
          <span>Price: {price}</span>
        </div>
      </div>
      <button onClick={() => handleAddToCart(id, image, description, selectedOption, itemCount, price)}>Add to cart</button>
    </Card>
  );
};

export default CardItem;