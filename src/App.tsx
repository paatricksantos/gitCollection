import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './assets/styles/global';
import RepoProvider from './contexts/RepoContext';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <RepoProvider>
          <Routes />
        </RepoProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
