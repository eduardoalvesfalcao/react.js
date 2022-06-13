import "./App.css"
import Exercicio01 from "./components/exercicio01";

const App = () => {
  let num1 = 5;
  let num2 = 5;
  return (
      <div className="App">
        <Exercicio01 num1={num1} num2={num2}/>
      </div>
    );
}
export default App;