import styled from 'styled-components';

import { colors } from 'variables';

const Input = styled.input`
  border: 1px solid ${colors.DOVE_GRAY};
  border-radius: 3px;
  font-size: 16px;
  line-height: 30px;
  padding: 0 10px;
  flex-grow: 1;
`;

export default Input;
