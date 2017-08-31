import styled from 'styled-components';

import { colors } from 'variables';

const Logo = styled.h1`
  font-family: 'Arial';
  font-size: 32px;
  color: ${({ color }) => color ? color : colors.WHITE};
  padding: 0.5em 0;
  margin: 0;
`;

export default Logo;
