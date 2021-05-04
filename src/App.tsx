import React, { ReactElement } from 'react';
import GlobalStyles from './GlobalStyles';

const App: React.FC = (): ReactElement => (
  <>
    <GlobalStyles />
    <div className="App">
      <header className="App-header">
        <p>covid</p>
      </header>
    </div>
  </>
);

export default App;
