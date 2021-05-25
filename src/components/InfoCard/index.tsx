import React from 'react';
import Styles from './styles';
import { validateString, validateNumber } from 'utils';

interface IInfoCardProps {
  title: string;
  population: number;
  loading: boolean;
}

const InfoCard: React.FC<IInfoCardProps> = ({
  title,
  loading,
  children,
  population,
  ...props
}) => {
  if (!validateString(title) && !loading) return null;

  const showPopulation = validateNumber(population) && population > 0;
  return (
    <Styles.Wrapper {...props}>
      <Styles.WrapperTitle>
        {!loading && (
          <>
            <Styles.Bullet />
            <Styles.Title>{title}</Styles.Title>
            {showPopulation && (
              <Styles.Population>{`Population: ${population.toLocaleString()}`}</Styles.Population>
            )}
          </>
        )}
      </Styles.WrapperTitle>

      <Styles.WrapperChilds>{children}</Styles.WrapperChilds>
    </Styles.Wrapper>
  );
};

export default InfoCard;
