export const LargePersonListItem = ({person}) => {
  const {name, age, hairColor, hobbies} = person;

  return (
    <>
    <h3>{name}</h3>
    <p>Age: {age}</p>
    <h3>hobbies: </h3>
      <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
      </>
  );
}