import logo from "./logo.svg";
import "./App.css";
import SimpleCounter from "./Component/SimpleCounter";
import Calculator from "./Component/Calculator";

function App() {
  return (
    <div className="App">
      <h2>Redux Toolkit</h2>

      <SimpleCounter />
      <Calculator />
    </div>
  );
}

export default App;
