import { faker } from '@faker-js/faker';

const generateProduct = () => {
  return {
    id: faker.string.uuid(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
  };
};

const products = Array.from({ length: 10 }, generateProduct);

export default products;