import React from 'react';

import { StyledTrack, TrackAuthor, TrackName } from './Track.styled';

export enum TrackCardVariant {
  Success,
  Wrong,
  Default,
}

export interface TrackCardProps extends React.HTMLAttributes<HTMLElement> {
  type: TrackCardVariant;
}

export interface TrackProps extends TrackCardProps {
  track: string;
  author: string;
}

export const Track: React.FC<TrackProps> = ({ track, author, ...props }) => (
  <StyledTrack {...props} role="button">
    <TrackName>{track}</TrackName>
    <TrackAuthor>{author}</TrackAuthor>
  </StyledTrack>
);
