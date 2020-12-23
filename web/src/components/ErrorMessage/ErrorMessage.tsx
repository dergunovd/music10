import styled from '@emotion/styled';

import { danger, main } from '../../utils';

export const ErrorMessage = styled.p`
  padding: 2rem 8rem;
  font-size: 1rem;
  color: ${main};
  border: 2px solid ${danger};
  font-weight: 700;
  position: relative;
  text-align: center;
`;
