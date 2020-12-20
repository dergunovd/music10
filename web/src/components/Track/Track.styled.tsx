import styled from '@emotion/styled';
import { accent, danger, main } from '../../utils';
import { css } from '@emotion/react';
import { TrackCardProps } from './Track';

export const StyledTrack = styled.div<TrackCardProps>`
  padding: 24px 104px;
  font-size: 24px;
  font-weight: 700;
  position: relative;
  text-align: center;
  cursor: pointer;
  border: 2px solid ${main};
  &:hover {
    transition: all 0.3s ease-in-out;
    border-color: ${accent};
  }
  ${({ type }) =>
    type === 'success'
      ? css`
          border: 2px solid ${accent};
          color: ${accent};
          &:hover {
            border-color: ${main};
          }
        `
      : type === 'wrong'
      ? css`
          border: 2px solid ${danger};
          color: ${danger};
          &:hover {
            border-color: ${main};
          }
        `
      : css``}
`;

export const TrackName = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

export const TrackAuthor = styled.h3`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  opacity: 0.7;
`;
