export const getProducts = () => {
  const query = '*[_type == \'products\']';

  return query;
};

export const getProductBySlug = (slug) => {
  const query = `*[_type == 'products' && slug.current == '${slug}']{
_id, name, brand, description, images, price, rating, category, link, slug,
'variants': *[_type == 'variants' && references(^._id)]{
name, image
}
}`;

  return query;
};
