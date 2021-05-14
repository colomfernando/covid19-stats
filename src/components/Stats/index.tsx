import React from 'react';
import InfoCard from 'components/InfoCard';
import { validateNumber } from 'utils';
import Styles from './styles';

interface IStatsProps {
  title: string;
  loading: boolean;
  confirmed?: number | undefined;
  deaths?: number | undefined;
  population?: number | undefined;
  recovered?: number | undefined;
}
const Stats: React.FC<IStatsProps> = ({
  title,
  loading = false,
  confirmed,
  deaths,
  population,
  recovered,
}) => {
  const validProps = [population, confirmed, deaths, recovered].filter((prop) =>
    validateNumber(prop as number)
  );

  if (!validProps.length && !loading) return null;

  const percent = (value: number, total: number): number =>
    (100 / total) * value;

  return (
    <InfoCard title={title} loading={loading}>
      {loading ? (
        <Styles.Loading loading={loading} />
      ) : (
        <>
          <Styles.Bar
            color={
              percent(confirmed as number, population as number) >= 10
                ? 'primary'
                : 'secondary'
            }
            type="cases"
            total={population}
            value={confirmed}
          />
          <Styles.Bar
            color="secondary"
            type="deaths"
            total={population}
            value={deaths}
          />

          <Styles.Bar
            color={
              percent(recovered as number, confirmed as number) >= 50
                ? 'primary'
                : 'secondary'
            }
            type="recovered"
            total={confirmed}
            value={recovered}
          />
        </>
      )}
    </InfoCard>
  );
};

export default Stats;
