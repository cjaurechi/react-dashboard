import logo from './logo.svg';
import HolaMundo from './components/HolaMundo'
import Producto from './components/Producto'
import ContentCardBig from './components/ContentCardBig'
import ContenedorPublicidad from './components/ContenedorPublicidad'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContenedorPublicidad>
          <h2>Woow! Publicidad!</h2>
        </ContenedorPublicidad>
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo />
        <Producto />
        <ContentCardBig
          titulo = 'Walter White'
          descripcion = 'Producto mágico del futuro'
          link = 'Hacé click acá y volá'
        />
        <ContenedorPublicidad>
        <ul>
          <li>Publicidad 1</li>
          <li>Publicidad 2</li>
          <li>Publicidad 3</li>
        </ul>
        </ContenedorPublicidad>
      </header>
    </div>
  );
}

export default App;
