import React from 'react';
import InfoCard from 'components/InfoCard';
import { validateNumber } from 'utils';
import Bar from 'components/Bar';
import Styles from './styles';

interface IProps {
  loading: boolean;
  confirmed?: number | undefined;
  deaths?: number | undefined;
  population?: number | undefined;
  recovered?: number | undefined;
}
const Cases: React.FC<IProps> = ({
  loading = false,
  confirmed,
  deaths,
  population,
  recovered,
}) => {
  const validProps = [confirmed, deaths, population, recovered].filter((prop) =>
    validateNumber(prop as number)
  );

  if (!validProps.length && !loading) return null;

  const percent = (value: number, total: number): number =>
    (100 / total) * value;

  return (
    <InfoCard title="Cases">
      {loading ? (
        <Styles.Loading loading={loading} />
      ) : (
        <>
          <Bar
            color={
              percent(confirmed as number, population as number) >= 10
                ? 'primary'
                : 'secondary'
            }
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

export default Cases;
