import styled from 'styled-components';
import SelectComponent from 'react-select';
import palette from 'theme/palette';

const Select = styled(SelectComponent)`
  .select__control {
    width: 300px;
    border-radius: 10px;
    background-color: ${palette.grey[50]};
    box-shadow: 0 0 0 1px ${palette.grey[300]};
    border-color: ${palette.grey[300]};
    &:hover,
    &--is-focused {
      border-color: ${palette.grey[300]};
    }
  }
`;

export default { Select };
