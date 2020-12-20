import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { TRACKS_PER_ROUND } from '../../utils';
import { ProgressBarItem, ProgressBarItemVariant } from './ProgressBarItem';

export interface ProgressBarProps {
  progress: boolean[];
  vertical?: boolean;
}

export const StyledProgressBar = styled.ul<Omit<ProgressBarProps, 'progress'>>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  [data-variant='${ProgressBarItemVariant.Current}'] {
    ${({ vertical }) =>
      vertical
        ? css`
            height: 72px;
          `
        : css`
            width: 72px;
          `};
  }
  li + li {
    ${({ vertical }) =>
      vertical
        ? css`
            margin-top: 24px;
          `
        : css`
            margin-left: 24px;
          `};
  }
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  ...props
}) => (
  <StyledProgressBar {...props} role="progressbar">
    {progress.map((item, index) => (
      <ProgressBarItem
        key={index}
        variant={
          item ? ProgressBarItemVariant.Success : ProgressBarItemVariant.Wrong
        }
      />
    ))}
    {progress.length < TRACKS_PER_ROUND && (
      <ProgressBarItem variant={ProgressBarItemVariant.Current} />
    )}
    {new Array(TRACKS_PER_ROUND - progress.length - 1)
      .fill(true)
      .map((_, index) => (
        <ProgressBarItem key={index} variant={ProgressBarItemVariant.Default} />
      ))}
  </StyledProgressBar>
);
