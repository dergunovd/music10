import React from "react";
import styled, { css } from "@emotion/native";

import { accent, bg, main } from "../../utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

export const Button = styled.Button<ButtonProps>`
  padding: 2rem 8rem;
  font-size: 24px;
  font-weight: 700;
  position: relative;
  text-align: center;

  ${({ primary }) =>
    primary
      ? css`
          border: 2px solid ${accent};
          color: ${bg};
          background: ${accent};
         }
        `
      : css`
          border: 2px solid ${main};
          color: ${main};
          background: transparent;
        `}
  &:disabled {
    opacity: 0.7;
    border: 2px solid ${main};
    color: ${main};
    background: transparent;
  }
`;
