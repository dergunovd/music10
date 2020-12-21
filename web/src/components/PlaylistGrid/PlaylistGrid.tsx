import styled from '@emotion/styled';

export const PlaylistGrid = styled.div`
  display: grid;
  margin: auto;
  grid-gap: 1rem 1.5rem;
  align-content: stretch;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(160px, 400px));
  grid-template-rows: repeat(4, 1fr);
`;
