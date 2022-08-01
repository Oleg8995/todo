import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Pages/Home/Home';
import Layout from './Components/layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
        <Home/>
    </Layout>
  </React.StrictMode>
  
);


