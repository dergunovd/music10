import React from "react";
import { Text, ViewProps } from "react-native";
import {
  HeaderLogo,
  HeaderNav,
  HeaderTitle,
  StyledHeader,
} from "./Header.styled";
import { css } from "@emotion/native";

export interface HeaderProps extends ViewProps {
  text: string;
  nav?: Array<React.ReactNodeArray>;
}

export const Header: React.FC<HeaderProps> = ({ text, nav = [], ...props }) => (
  <StyledHeader {...props}>
    <HeaderLogo>
      <Text>Music10 </Text>
      <Text
        style={css`
          font-size: 12px;
        `}
      >
        β
      </Text>
      <Text
        style={css`
          font-size: 12px;
        `}
      >
        Design by Qurle
      </Text>
    </HeaderLogo>
    <HeaderTitle>{text}</HeaderTitle>
    <HeaderNav>{nav}</HeaderNav>
  </StyledHeader>
);
