import logo from './logo.svg';
import HolaMundo from './components/HolaMundo'
import Producto from './components/Producto'
import ContentCardBig from './components/ContentCardBig'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo />
        <Producto />
        <ContentCardBig />
      </header>
    </div>
  );
}

export default App;
