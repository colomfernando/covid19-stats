import React from 'react';
import Styles from './styles';
import useStore from 'store';
import Stats from 'components/Stats';

const Body: React.FC = () => {
  const [store] = useStore();
  const { cases, vaccines, global, selectedCountry, loading } = store;

  console.log('cases :>> ', cases);
  console.log('vaccines :>> ', vaccines);

  const data = { ...cases, ...vaccines };

  return (
    <Styles.Wrapper>
      <Stats title="Global" {...global} loading={loading.global} />
      <Stats title={selectedCountry} {...cases} loading={loading.data} />
    </Styles.Wrapper>
  );
};

export default Body;
