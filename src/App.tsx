import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import { StoreProvider } from 'store';
import Header from 'components/Header';

import Body from 'components/Body';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <GlobalStyles />
      <>
        <Header />
        <Body />
      </>
    </StoreProvider>
  );
};

export default App;
