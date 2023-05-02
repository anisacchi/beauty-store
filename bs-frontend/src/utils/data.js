export const getProducts = () => {
  const query = '*[_type == \'products\']';

  return query;
};

export const getProductById = (productId) => {
  const query = `*[_type == 'products' && _id == ${productId}]`;

  return query;
};

export const getProductsByCategory = (category) => {
  const query = `*[_type == 'products' && category == ${category}]`;

  return query;
};
