import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/Store';
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <div style={{ marginTop: '64px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/dashboard/train/*" element={<Dashboard />} />
              <Route path="/dashboard/flight/*" element={<Dashboard />} />
              <Route path="/dashboard/hotel/*" element={<Dashboard />} />
              <Route path="/dashboard/train/rail" element={<TrainManagement />} />
              <Route path="/dashboard/flight/*" element={<FlightManagement />} />
              <Route path="/dashboard/hotel/*" element={<HotelManagement />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
