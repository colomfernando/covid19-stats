import React from 'react';
import InfoCard from 'components/InfoCard';
import { validateNumber } from 'utils';
import Bar from 'components/Bar';
import Styles from './styles';

interface IProps {
  loading?: boolean;
  confirmed?: number;
  deaths?: number;
  population?: number;
  recovered?: number;
}
const Cases: React.FC<IProps | null> = ({
  loading,
  confirmed,
  deaths,
  population,
  recovered,
}) => {
  const validProps = [confirmed, deaths, population, recovered].filter((prop) =>
    validateNumber(prop as number)
  );

  if (!validProps.length && !loading) return null;

  return (
    <InfoCard title="Cases">
      {loading ? (
        <Styles.Loading loading={loading} />
      ) : (
        <>
          <Bar
            color="secondary"
            type="cases"
            total={population}
            value={confirmed}
          />
          <Bar
            color="secondary"
            type="deaths"
            total={population}
            value={deaths}
          />

          <Bar
            color="primary"
            type="recovered"
            total={population}
            value={recovered}
          />
        </>
      )}
    </InfoCard>
  );
};

export default Cases;
