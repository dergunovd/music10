import React from "react";
import { PressableProps } from "react-native";
import styled, { css } from "@emotion/native";
import { Colors } from "@dergunovd/music10";

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
  color: ${Colors.main};
  & + & {
    margin-top: 12px;
  }
  ${({ primary }) =>
    primary
      ? css`
          border: 2px solid ${Colors.accent};
          color: ${Colors.bg};
          background: ${Colors.accent};
         }
        `
      : css`
          border: 2px solid ${Colors.main};
          color: ${Colors.main};
          background: transparent;
        `}
  &:disabled {
    opacity: 0.7;
    border: 2px solid ${Colors.main};
    color: ${Colors.main};
    background: transparent;
  }
`;

export const ButtonText = styled.Text`
  color: ${Colors.main};
  text-align: center;
`;
