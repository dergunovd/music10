import React from "react";
import { ViewProps } from "react-native";
import styled, { css } from "@emotion/native";

import { accent, danger, main } from "../../../utils";

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
  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border: 4px solid ${main};
  ${({ variant }) =>
    variant === ProgressBarItemVariant.Success
      ? css`
          border-color: ${accent};
        `
      : variant === ProgressBarItemVariant.Wrong
      ? css`
          border-color: ${danger};
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
