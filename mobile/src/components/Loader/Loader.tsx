import React from "react";
import styled from "@emotion/native";
import { ActivityIndicator } from "react-native";
import { Colors } from "@dergunovd/music10";

const StyledLoader = styled.View`
  width: 200px;
  height: 200px;
  margin: auto;
`;

export const Loader: React.FC = () => (
  <StyledLoader>
    <ActivityIndicator size="large" color={Colors.accent} />
  </StyledLoader>
);
