import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors } from '@dergunovd/music10';

import { TrackCardProps, TrackCardVariant } from './Track';

export const StyledTrack = styled.div<TrackCardProps>`
  padding: 2rem 8rem;
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  text-align: center;
  cursor: pointer;
  border: 2px solid ${Colors.main};
  &:hover {
    transition: all 0.3s ease-in-out;
    border-color: ${Colors.accent};
  }
  ${({ type }) =>
    type === TrackCardVariant.Success
      ? css`
          border: 2px solid ${Colors.accent};
          color: ${Colors.accent};
          &:hover {
            border-color: ${Colors.main};
          }
        `
      : type === TrackCardVariant.Wrong
      ? css`
          border: 2px solid ${Colors.danger};
          color: ${Colors.danger};
          &:hover {
            border-color: ${Colors.main};
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
