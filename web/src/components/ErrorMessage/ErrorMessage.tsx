import styled from '@emotion/styled';
import { Colors } from '@dergunovd/music10';

export const ErrorMessage = styled.p`
  padding: 2rem 8rem;
  font-size: 1rem;
  color: ${Colors.main};
  border: 2px solid ${Colors.danger};
  font-weight: 700;
  position: relative;
  text-align: center;
`;
