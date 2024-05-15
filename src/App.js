import React from 'react';
import Navbar from './component/Navbar';
import { ThemeProvider } from '@emotion/react';
import theme from './component/Theme';
import Footer from './component/Footer';
import Home from './screen/Home';
import Login from './screen/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './screen/Dashboard';
import TrainManagement from './screen/Train/TrainManagement';
import FlightManagement from './screen/Flight/FlightManagement';
import HotelManagement from './screen/Hotel/HotelManagement';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <div>
            {/* <Dashboard /> */}
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard/train/rail" element={<TrainManagement />} />
                <Route path="/dashboard/flight/*" element={<FlightManagement />} />
                <Route path="/dashboard/hotel/*" element={<HotelManagement />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
