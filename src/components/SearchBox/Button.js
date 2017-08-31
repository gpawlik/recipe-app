import styled from 'styled-components';

import { colors } from 'variables';

const Button = styled.button`
  color: ${colors.MIDNIGHT_BLACK};
  background-color: ${colors.WHITE};
  font-size: 16px;
  font-weight: 600;
  padding: 0 1em;
  margin-left: 5px;
  line-height: 30px;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid ${colors.DOVE_GRAY};
  box-shadow: 0px 0px -1px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${colors.DOVE_GRAY};
  }
`;

export default Button;
