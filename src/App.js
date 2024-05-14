import { Provider } from 'react-redux';
import './App.css';
import store from './redux/Store';
import Navbar from './component/Navbar';
import { ThemeProvider } from '@emotion/react';
import theme from './component/Theme';
import Footer from './component/Footer';
import Home from './screen/Home';
import Login from './screen/Login';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home/>
        <Login/>
        <Footer/>
      </ThemeProvider>    </Provider>
  );
}

export default App;
