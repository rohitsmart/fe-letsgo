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

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar /> {/* Render Navbar component */}
          <div style={{ marginTop: '64px' }}> {/* Adjust margin top to accommodate Navbar height */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
