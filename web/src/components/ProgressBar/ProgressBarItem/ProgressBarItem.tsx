import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Colors } from '@dergunovd/music10';

export enum ProgressBarItemVariant {
  Success,
  Wrong,
  Current,
  Default,
}

export interface ProgressBarItemProps {
  variant: ProgressBarItemVariant;
}

export const StyledProgressBarItem = styled.li<ProgressBarItemProps>`
  margin: 0;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: block;
  border-radius: 1rem;
  border: 4px solid ${Colors.main};
  transition: all 0.3s ease-in-out;
  ${({ variant }) =>
    variant === ProgressBarItemVariant.Success
      ? css`
          border-color: ${Colors.accent};
        `
      : variant === ProgressBarItemVariant.Wrong
      ? css`
          border-color: ${Colors.danger};
        `
      : variant === ProgressBarItemVariant.Default
      ? css`
          opacity: 0.2;
        `
      : css``}
`;

export const ProgressBarItem: React.FC<ProgressBarItemProps> = (props) => (
  <StyledProgressBarItem data-variant={props.variant} {...props} />
);
