import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../assets/styles/global';
import themes from '../../assets/styles/themes/default';

import Routes from '../../Router';

import Header from './../Header';
import Footer from '../Footer'

import { AuthProvider } from '../../Context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={themes}>
          <GlobalStyle />
          <Header />
          <Routes />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}
