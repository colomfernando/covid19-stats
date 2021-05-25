import React from 'react';
import Styles from './styles';
import useStore from 'store';
import { parseData } from './utils';
import Stats from 'components/Stats';

const Body: React.FC = () => {
  const [store] = useStore();
  const { cases, vaccines, selectedCountry, loading } = store;

  const dataCountry = parseData({ ...cases, ...vaccines });
  const { population } = cases;

  return (
    <Styles.Wrapper>
      <Stats
        title={selectedCountry || 'Global'}
        data={dataCountry}
        loading={loading.global || loading.data}
        population={population as number}
      />
    </Styles.Wrapper>
  );
};

export default Body;
