import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import { StoreProvider } from 'store';
import Header from 'components/Header';
import Search from 'components/Search';
import Body from 'components/Body';

const App: React.FC = () => (
  <StoreProvider>
    <GlobalStyles />
    <>
      <Header>
        <Search />
      </Header>
      <Body />
    </>
  </StoreProvider>
);

export default App;
