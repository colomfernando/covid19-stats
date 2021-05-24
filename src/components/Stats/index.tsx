import React from 'react';
import InfoCard from 'components/InfoCard';
import { validateArr } from 'utils';
import { IParseItem } from 'components/Body/utils';
import Styles from './styles';

interface IStatsProps {
  title: string;
  loading: boolean;
  data: IParseItem[] | [];
}

const Stats: React.FC<IStatsProps> = ({ title, loading = false, data }) => {
  if (!data || !validateArr(data) || !data.length) return null;

  return (
    <InfoCard title={title} loading={loading}>
      {loading ? (
        <Styles.Loading loading={loading} />
      ) : (
        <>
          {data.map((item, idx) => (
            <Styles.Bar key={idx.toString()} {...item} />
          ))}
        </>
      )}
    </InfoCard>
  );
};

export default Stats;
