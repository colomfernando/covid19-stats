import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Header from 'components/Header';
import Search from 'components/Search';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <div>
      <Header>
        <Search />
      </Header>
    </div>
  </>
);

export default App;
