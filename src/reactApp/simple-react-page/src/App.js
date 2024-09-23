import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Debounce from './debounce';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login name={"harshith"}></Login>
        <Debounce></Debounce>
      </header>
    </div>
  );
}

export default App;
