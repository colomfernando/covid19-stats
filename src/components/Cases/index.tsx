import React from 'react';
import InfoCard from 'components/InfoCard';

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
        <p>{`confirmed ${confirmed}`}</p>
        <p>{`deaths ${deaths}`}</p>
        <p>{`population ${population}`}</p>
        <p>{`recorered ${recovered}`}</p>
      </div>
    </InfoCard>
  );
};

export default Cases;
