import React from "react";
import { ViewProps } from "react-native";
import styled, { css } from "@emotion/native";
import { Colors } from "@dergunovd/music10";

export enum ProgressBarItemVariant {
  Success,
  Wrong,
  Current,
  Default,
}

export interface ProgressBarItemProps extends ViewProps {
  variant: ProgressBarItemVariant;
}

export const StyledProgressBarItem = styled.View<ProgressBarItemProps>`
  padding: 0;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  border: 4px solid ${Colors.main};
  margin: 0 0 0 6px;
  ${({ variant }) =>
    variant === ProgressBarItemVariant.Success
      ? css`
          border: 4px solid ${Colors.accent};
        `
      : variant === ProgressBarItemVariant.Wrong
      ? css`
          border: 4px solid ${Colors.danger};
        `
      : variant === ProgressBarItemVariant.Default
      ? css`
          opacity: 0.2;
        `
      : css``};
`;

export const ProgressBarItem: React.FC<ProgressBarItemProps> = (props) => (
  <StyledProgressBarItem
    accessibilityRole="progressbar"
    data-variant={props.variant}
    {...props}
  />
);
