import styled from 'styled-components';
import breakpoints from 'theme/breakpoints';

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: 10px auto;
  align-items: center;
  padding: 20px;
  ${breakpoints.lg`
		max-width: initial;
		flex-flow: column nowrap;
		justify-content: center;
	`}
`;

Wrapper.displayName = 'Header';

export default { Wrapper };
