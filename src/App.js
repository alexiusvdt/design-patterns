import { SplitScreen } from "./components/SplitScreen";

const LeftHandComponent = () => {
  return <h1>Left!</h1>
}

const RightHandComponent =() => {
  return <p> Right!</p>
}

function App() {
  return (
    <SplitScreen 
      left={LeftHandComponent}
      right={RightHandComponent}
    />
  );
}

export default App;

