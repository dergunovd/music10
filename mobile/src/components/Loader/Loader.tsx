import React from "react";
import styled from "@emotion/native";
import { Svg, G, Circle } from "react-native-svg";

const StyledLoader = styled(Svg)`
  width: 200px;
  height: 200px;
  margin: auto;
`;

export const Loader: React.FC = () => (
  <StyledLoader viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <G transform="translate(20 50)">
      <Circle cx="0" cy="0" r="6" fill="#94ff28">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.375s"
          calcMode="spline"
          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          values="0;1;0"
          keyTimes="0;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </Circle>
    </G>
    <G transform="translate(40 50)">
      <Circle cx="0" cy="0" r="6" fill="#94ff28">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.25s"
          calcMode="spline"
          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          values="0;1;0"
          keyTimes="0;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </Circle>
    </G>
    <G transform="translate(60 50)">
      <Circle cx="0" cy="0" r="6" fill="#94ff28">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="-0.125s"
          calcMode="spline"
          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          values="0;1;0"
          keyTimes="0;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </Circle>
    </G>
    <G transform="translate(80 50)">
      <Circle cx="0" cy="0" r="6" fill="#94ff28">
        <animateTransform
          attributeName="transform"
          type="scale"
          begin="0s"
          calcMode="spline"
          keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          values="0;1;0"
          keyTimes="0;0.5;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </Circle>
    </G>
  </StyledLoader>
);