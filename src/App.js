import { Provider } from 'react-redux';
import './App.css';
import store from './redux/Store';
import Navbar from './component/Navbar';
import { ThemeProvider } from '@emotion/react';
import theme from './component/Theme';
import Footer from './component/Footer';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Footer/>
      </ThemeProvider>    </Provider>
  );
}

export default App;
