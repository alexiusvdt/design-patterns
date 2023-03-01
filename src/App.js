import { RegularList } from "./components/RegularList"
import {NumberedList} from "./components/NumberedList"
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { SmallProductListItem } from "./products/SmallProductListItem";
import { Modal } from "./components/Modal"

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

// with just a couple of different components we've allowed for so much more DRY code implementations!
// this may not save much time now, but think of what happens when your codebase gets much larger...
function App() {
  return (
    <>
    <Modal>
      <LargeProductListItem product={products[0]} />
    </Modal>
    </>
       
  );
}

export default App;

