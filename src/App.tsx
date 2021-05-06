import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Header from 'components/Header';
import Search from 'components/Search';
import Cases from 'components/Cases';

const casesData = {
  confirmed: 3559222,
  deaths: 78726,
  population: 46354321,
  recovered: 150376,
  sq_km_area: 505992,
};
const App: React.FC = () => (
  <>
    <GlobalStyles />
    <div>
      <Header>
        <Search />
      </Header>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
      >
        <Cases {...casesData} />
      </div>
    </div>
  </>
);

export default App;
