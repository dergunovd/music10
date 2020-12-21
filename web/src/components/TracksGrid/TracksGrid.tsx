import styled from '@emotion/styled';

export const TracksGrid = styled.div`
  display: grid;
  margin: auto;
  width: 100%;
  grid-gap: 1rem 1.5rem;
  align-content: stretch;
  justify-content: center;
  grid-template: repeat(4, 1fr) / 1fr;
  @media (min-width: 1000px) {
    max-width: 560px;
  }
`;
