import React from "react";
import styled, { css } from "@emotion/native";

import { accent, bg, main } from "../../utils";
import { PressableProps } from "react-native";

export interface ButtonProps extends PressableProps {
  primary?: boolean;
}

export const Button = styled.Pressable<ButtonProps>`
  padding: 24px 96px;
  font-size: 24px;
  font-weight: 700;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${main};
  & + & {
    margin-top: 12px;
  }
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

export const ButtonText = styled.Text`
  color: ${main};
  text-align: center;
`;
