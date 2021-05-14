import React from 'react';
import Styles from './styles';
import useStore from 'store';
import Cases from 'components/Cases';

const Body: React.FC = () => {
  const [store] = useStore();
  const {
    cases = {
      confirmed: undefined,
      deaths: undefined,
      population: undefined,
      recovered: undefined,
    },
    loading,
  } = store;

  return (
    <Styles.Wrapper>
      <Cases {...cases} loading={loading.cases} />
    </Styles.Wrapper>
  );
};

export default Body;
