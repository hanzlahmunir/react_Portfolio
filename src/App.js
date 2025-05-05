import React from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import AppRoutes from './routes/AppRoutes';
import { TitleProvider } from './context/TitleContext';

function App() {
  return (
    <TitleProvider>
      <Header />
      <SideNav />
      <div style={{ marginLeft: '250px', marginTop: '80px', padding: '20px' }}>
        <AppRoutes />
      </div>
    </TitleProvider>
  );
}

export default App;
