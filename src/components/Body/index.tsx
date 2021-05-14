import React from 'react';
import Styles from './styles';
import useStore from 'store';
import Stats from 'components/Stats';

const Body: React.FC = () => {
  const [store] = useStore();
  const {
    cases = {
      confirmed: undefined,
      deaths: undefined,
      population: undefined,
      recovered: undefined,
    },
    global,
    loading,
  } = store;

  return (
    <Styles.Wrapper>
      <Stats title="Global" {...global} loading={loading.global} />
      <Stats {...cases} title="Cases" loading={loading.cases} />
    </Styles.Wrapper>
  );
};

export default Body;
