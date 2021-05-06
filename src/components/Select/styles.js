import styled from 'styled-components';
import SelectComponent from 'react-select';

const Select = styled(SelectComponent)`
  .custom-select {
    &__value-container {
      width: 90px;
    }
  }
`;

export default { Select };
