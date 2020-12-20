import styled from '@emotion/styled';

export const TracksGrid = styled.div`
  display: grid;
  margin: auto;
  grid-gap: 10px 15px;
  align-content: stretch;
  justify-content: center;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
`;
