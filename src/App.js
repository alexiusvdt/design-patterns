import { SplitScreen } from "./components/SplitScreen";


const LeftHandComponent = ({name}) => {
  return <h1 style={{ backgroundColor: 'green'}}>{name}</h1>
}
// now we can pass props easier to the child components!
const RightHandComponent = ({message}) => {
  return <p style={{backgroundColor: 'red'}}> {message}</p>
}

function App() {
  return (
    //instead of passing left/right as props, we can render them as children:
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="big tony"/>
      <RightHandComponent message="Hello world!" />
    </SplitScreen>
    
  );
}

export default App;

