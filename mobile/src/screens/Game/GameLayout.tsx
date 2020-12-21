import styled from '@emotion/native';

export const GameLayout = styled.View`
  display: flex;
  width: 100%;
  padding: 0 1rem;
  text-align: center;
  justify-content: space-between;
  & > * + * {
    margin-top: 4rem;
  }
`;
