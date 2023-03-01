import { RegularList } from "./components/RegularList"
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";

const people = [{
  name: 'John doe',
  age: 53,
  hairColor: 'brown',
  hobbies: ['swimming', "biking"]
}, {
  name: 'jeewwf doe',
  age: 43,
  hairColor: 'gren',
  hobbies: ['running', "biking"]
}, {
  name: 'ewcw doe',
  age: 23,
  hairColor: 'oranj',
  hobbies: ['golfing', "biking"]
}]

const products = [{
  name: 'running shoe',
  price: '$120',
  description: 'sweet-ass shoes',
  rating: 3.0
},{
  name: 'golf shoe',
  price: '$130',
  description: 'take 3 off your game',
  rating: 4.0
}



]


function App() {
  return (
    <>
    {/* this component renders two very diferent lists pased on what gets passed in as itemComponent.*/}
    {/* DRY AF! */}
    <RegularList 
    items={people}
    resourceName="person"
    itemComponent={SmallPersonListItem}
    />
    <RegularList 
    items={people}
    resourceName="person"
    itemComponent={LargePersonListItem}
    />
    </>
       
  );
}

export default App;

