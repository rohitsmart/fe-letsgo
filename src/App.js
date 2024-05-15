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
  const isLoggedIn = useSelector(state => state.test.isLoggedIn);
  console.log('isLogin', isLoggedIn)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <div>
            <Routes>
              <Route path='' element={<Layout />} >
                {
                  isLoggedIn ? (<>  <Route path='/' element={<Dashboard />} />
                    <Route path="/dashboard/train/rail" element={<TrainManagement />} />
                    <Route path="/dashboard/flight/*" element={<FlightManagement />} />
                    <Route path="/dashboard/hotel/*" element={<HotelManagement />} /></>) :
                     (<>  <Route path="/" element={<Home />} />
                      <Route path="/login" element={<Login />} /></>)
                }
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;




