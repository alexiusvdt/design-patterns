export const LargeProductListItem = ({product}) => {
  const {name, price, description, rating} = product;

  return (
    // react fragment tags (empty <>)
    <>
    <h3>{name}</h3>
    <p>{price}</p>
    <h2>Description: </h2>
    <p>{description}</p>
    <p>{rating}</p>
    
    </>
  );
}