import React from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import AppRoutes from './routes/AppRoutes';
import { TitleProvider } from './context/TitleContext';
import Footer from './components/Footer';
import { Box } from '@mui/material';

function App() {
  return (
    <TitleProvider>
      <Header />
      <SideNav />
      <Box sx={{ marginLeft: '250px', marginTop: '80px', padding: '20px' }}>
        <AppRoutes />
        <Footer />
      </Box>
    </TitleProvider>
  );
}

export default App;
