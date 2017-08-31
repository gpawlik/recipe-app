import styled from 'styled-components';

import { colors } from 'variables';

const Image = styled.div`
  border-radius: 50%;
  width: 75px;
  height: 75px;
  display: table;
  margin-right: 15px;
  background-image: url(${({ thumbnail }) => thumbnail});
  background-color: ${colors.DOVE_GRAY};
  background-size: cover;
`;

export default Image;
