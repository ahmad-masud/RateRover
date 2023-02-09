import './App.css';
import CurrencyConverter from './Components/CurrencyConverter/CurrencyConverter.js';
import Header from './Components/Header/Header.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <CurrencyConverter/>
    </div>
  );
}

export default App;
