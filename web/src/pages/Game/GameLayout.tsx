import styled from '@emotion/styled';

export const GameLayout = styled.main`
  display: grid;
  grid-template-areas: 'tracks' 'progress' 'button';
  grid-gap: 4rem;
  width: 100%;
  padding: 0 1rem;
  justify-content: stretch;
  justify-self: center;
`;
