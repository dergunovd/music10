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
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  [data-variant='${ProgressBarItemVariant.Current}'] {
    ${({ vertical }) =>
      vertical
        ? css`
            height: 6rem;
          `
        : css`
            width: 6rem;
          `};
  }
  li + li {
    ${({ vertical }) =>
      vertical
        ? css`
            margin-top: 2rem;
          `
        : css`
            margin-left: 2rem;
          `};
  }
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = [],
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
    {progress.length < TRACKS_PER_ROUND ? (
      <ProgressBarItem
        variant={ProgressBarItemVariant.Current}
        key={progress.length}
      />
    ) : null}
    {new Array(Math.max(TRACKS_PER_ROUND - progress.length - 1, 0))
      .fill(true)
      .map((_, index) => (
        <ProgressBarItem
          key={progress.length + index}
          variant={ProgressBarItemVariant.Default}
        />
      ))}
  </StyledProgressBar>
);
