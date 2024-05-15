import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './component/Theme';
import Home from './screen/Home';
import Login from './screen/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './screen/Dashboard';
import TrainManagement from './screen/Train/TrainManagement';
import FlightManagement from './screen/Flight/FlightManagement';
import HotelManagement from './screen/Hotel/HotelManagement';
import Layout from './screen/layout/Layout';
import { useSelector } from 'react-redux';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <div>
            <Routes>
              <Route path='' element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;




