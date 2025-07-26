import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Import your main App component
// import './index.css'; // You can remove this line if you're solely using Tailwind CDN and not custom CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);