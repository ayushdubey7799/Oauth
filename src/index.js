import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Auth0ProviderWithHistory from './components/AuthProviderWithHistory';


const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
  <Auth0ProviderWithHistory>
    <App />
  </Auth0ProviderWithHistory>
</React.StrictMode>,
);

