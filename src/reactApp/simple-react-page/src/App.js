import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Debounce from './debounce';
import ThrottledScroll from './Throttle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login name={"harshith"}></Login>
        <Debounce></Debounce>
        <ThrottledScroll></ThrottledScroll>
      </header>
    </div>
  );
}

export default App;
