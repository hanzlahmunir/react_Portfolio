// src/App.js
import React from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';

function App() {
  return (
    <>
      <Header />
      <SideNav />
      <div style={{ marginLeft: '250px', marginTop: '80px', padding: '20px' }}>
        <h1>Hanzlah Portfolio is Live 🎯</h1>
      </div>
    </>
  );
}

export default App;
