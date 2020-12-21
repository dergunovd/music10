import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { accent, bg, main } from '../../utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 2rem 8rem;
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  text-align: center;
  cursor: pointer;

  ${({ primary }) =>
    primary
      ? css`
          border: 2px solid ${accent};
          color: ${bg};
          background: ${accent};
          &:hover:before {
             content: '';
             position: absolute;
             top: 1.2rem;
             left: 1.2rem;
             display: block;
             width: 100%;
             height: 100%;
             border: 4px solid ${main};
             z-index: -1;
           }
         }
        `
      : css`
          border: 2px solid ${main};
          color: ${main};
          background: transparent;
          &:hover {
            transition: all 0.3s ease-in-out;
            border-color: ${accent};
          }
        `}
  &:disabled {
    opacity: 0.7;
    border: 2px solid ${main};
    color: ${main};
    background: transparent;
    cursor: not-allowed;

    &:hover:before {
      display: none;
    }
  }
`;
