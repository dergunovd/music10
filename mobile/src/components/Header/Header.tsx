import React from "react";
import { Text, View, ViewProps } from "react-native";
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
      <Text>
        <Text
          style={css`
            font-size: 24px;
            font-weight: 500;
          `}
        >
          Music10{" "}
        </Text>
        <Text
          style={css`
            font-size: 12px;
            position: relative;
            top: -12px;
          `}
        >
          β
        </Text>
      </Text>
      <View>
        <Text
          style={css`
            font-size: 12px;
          `}
        >
          Design by Qurle
        </Text>
      </View>
    </HeaderLogo>
    <HeaderTitle>{text}</HeaderTitle>
    <HeaderNav>{nav}</HeaderNav>
  </StyledHeader>
);
