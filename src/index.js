import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from './Routes';
import { DollarProvider } from './components/contextDollar';
import { TaxProvider } from './components/contextTax'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DollarProvider>
      <TaxProvider> 
        <Routes />
      </TaxProvider>
    </DollarProvider>
  </React.StrictMode>
);
