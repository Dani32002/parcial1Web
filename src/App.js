import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Autentication from './components/Autentication';
import banner from './carroBanner.png';
import { Image } from 'react-bootstrap';
import List from './components/List';
import { FormattedMessage } from 'react-intl';

function App() {
  return (
    <div className="main">
      <div className="header">
        <h1 className="title">TuSegundazo.com</h1>
        <div className="lineShadow">
          <hr className="line"/>
        </div>
        <Image className="banner" src={banner} alt="banner"/>
        <hr className="line2"/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Autentication />}/>
          <Route path="/" element={<Autentication />}/>
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
      <div className="contactFrame">
        <p className="contact"><FormattedMessage id='Contáctenos'/>: +57 3102105253 - info@tusegundazo.com - @tusegundazo</p>
      </div>
    </div>
  );
}

export default App;
