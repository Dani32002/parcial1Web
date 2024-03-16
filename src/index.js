import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntlProvider } from 'react-intl';
import englishMessages from './locales/en.json'
import spanishMessages from './locales/es.json'


const checkLanguageNavigator = () => {
  console.log(navigator.language);
  //return navigator.language.startsWith("en");
  return false;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale={(checkLanguageNavigator())? "en": "es"} messages= {(checkLanguageNavigator())? englishMessages: spanishMessages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
