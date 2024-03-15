import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard';
import Manager from './components/manager';
import Member from './components/member';
import Products from './components/products';
import Orders from './components/orders';
import Header from './components/header';
function App() {
  return (
    <>
      <body style={{ backgroundColor: '#F3F5F8' , height: '100vh'}}>
        <div style={{ display: 'flex',height: '100vh' }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Header />
            <div style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/manager" element={<Manager />} />
                <Route path="/member" element={<Member />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
