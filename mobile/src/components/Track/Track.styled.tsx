import styled, { css } from "@emotion/native";

import { accent, danger, main } from "../../utils";
import { TrackCardProps, TrackCardVariant } from "./Track.types";

export const StyledTrack = styled.Pressable<TrackCardProps>`
  padding: 24px 96px;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  position: relative;
  text-align: center;
  border: 2px solid ${main};
  ${({ type }) =>
    type === TrackCardVariant.Success
      ? css`
          border: 2px solid ${accent};
          color: ${accent};
        `
      : type === TrackCardVariant.Wrong
      ? css`
          border: 2px solid ${danger};
          color: ${danger};
        `
      : css``}
`;

export const TrackName = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const TrackAuthor = styled.Text`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  opacity: 0.7;
`;
