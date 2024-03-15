import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Autentication from './components/Autentication';
import banner from './carroBanner.png';
import { Image } from 'react-bootstrap';
import List from './components/List';

function App() {
  return (
    <div className="main">
      <h1 className="title">TuSegundazo.com</h1>
      <hr />
      <div className="centerdedDiv">
        <Image className="banner" src={banner} alt="banner"/>
      </div>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Autentication />}/>
          <Route path="/" element={<Autentication />}/>
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
      <p>Contact us: +57 3102105253 - info@tusegundazo.com - @tusegundazo</p>
    </div>
  );
}

export default App;
