import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import miniShopStore from './store/store';
import App from './App';
import './app.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={miniShopStore}>
      <App />
    </Provider>
  </React.StrictMode>
);