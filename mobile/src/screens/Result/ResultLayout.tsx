import styled from '@emotion/native';

export const ResultLayout = styled.View`
  display: flex;
  width: 100%;
  padding: 0 1rem;
  justify-content: space-between;
  text-align: center;
  & > * + * {
    margin-top: 4rem;
  }
`;
