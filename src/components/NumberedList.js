export const RegularList = ({ 
  items,
  resourceName,
  itemComponent: ItemComponent
}) => {
  let i;
  return (
    <>
    {/* this is the same list, but provides a numerical heading overtop  */}
    <h3>{i + 1}</h3>
    {items.map((item, i) => (
      <ItemComponent key={i} {...{ [resourceName]: item}}/>
    ))}
    </>
  )
}
