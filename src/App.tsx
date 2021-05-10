import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Header from 'components/Header';
import Search from 'components/Search';
import Cases from 'components/Cases';

const casesData = {
  confirmed: 3147740,
  continent: 'South America',
  country: 'Argentina',
  deaths: 67325,
  population: 44271041,
  recovered: 2817165,
  sq_km_area: 2780400,
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
