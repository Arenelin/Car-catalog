import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home/Home/Home';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/AllStyles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Home />
  </React.StrictMode>
);


reportWebVitals();
