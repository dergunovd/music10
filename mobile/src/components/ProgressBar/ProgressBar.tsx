import React from "react";
import styled, { css } from "@emotion/native";

import { TRACKS_PER_ROUND } from "../../utils";
import { ProgressBarItem, ProgressBarItemVariant } from "./ProgressBarItem";

export interface ProgressBarProps {
  progress: boolean[];
  vertical?: boolean;
}

export const StyledProgressBar = styled.View<
  Omit<ProgressBarProps, "progress">
>`
  margin: 0;
  display: flex;
  flex-direction: row;
  padding: 0;
  [data-variant="${ProgressBarItemVariant.Current}"] {
    width: 36px;
  }
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = [],
  ...props
}) => (
  <StyledProgressBar {...props}>
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
