import React from 'react';
import Styles from './styles';
import useStore from 'store';
import { parseData } from './utils';
import Stats from 'components/Stats';

const Body: React.FC = () => {
  const [store] = useStore();
  const { cases, vaccines, global, selectedCountry, loading } = store;

  const dataCountry = parseData({ ...cases, ...vaccines });
  const dataGlobal = parseData(global);

  const showData = dataCountry.length;

  return (
    <Styles.Wrapper>
      <Stats
        title={selectedCountry || 'Global'}
        data={showData ? dataCountry : dataGlobal}
        loading={loading.global || loading.data}
      />
    </Styles.Wrapper>
  );
};

export default Body;
