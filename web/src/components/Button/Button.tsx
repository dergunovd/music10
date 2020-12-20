import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { accent, bg, main } from '../../utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 24px 104px;
  font-size: 24px;
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
             top: 16px;
             left: 16px;
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
`;
