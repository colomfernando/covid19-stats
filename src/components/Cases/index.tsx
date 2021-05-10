import React from 'react';
import InfoCard from 'components/InfoCard';
import Bar from 'components/Bar';
// import Styles from './styles';

interface Props {
  confirmed: number;
  deaths: number;
  population: number;
  recovered: number;
}
const Cases: React.FC<Props> = ({
  confirmed,
  deaths,
  population,
  recovered,
}) => {
  return (
    <InfoCard title="Cases">
      <div>
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
      </div>
    </InfoCard>
  );
};

export default Cases;
