import React from 'react';

import { StyledTrack, TrackAuthor, TrackName } from './Track.styled';

export type TrackCardType = 'success' | 'wrong';

export interface TrackCardProps extends React.HTMLAttributes<HTMLElement> {
  type?: TrackCardType;
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
