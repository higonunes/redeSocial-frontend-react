import React from 'react';
import { AuthProvider } from './contexts/auth';
import GlobalStyle from './styles/globalStyle';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyle />
      <ToastContainer autoClose={2500} />
    </>
  );
};

export default App;
