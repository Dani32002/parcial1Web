import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Autentication from './components/Autentication';
import List from './components/List';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="main">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Autentication />}/>
          <Route path="/" element={<Autentication />}/>
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
      <ContactInfo />
    </div>
  );
}

export default App;
