import React from "react";
import { Text, View } from "react-native";
import { HeaderLogo, StyledHeader } from "./Header.styled";
import { css } from "@emotion/native";

export const Header: React.FC = (props) => (
  <StyledHeader {...props}>
    <HeaderLogo>
      <View
        style={css`
          align-items: flex-start;
          flex-direction: row;
          display: flex;
          justify-content: flex-start;
        `}
      >
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
      </View>
      <View>
        <Text
          style={css`
            font-size: 12px;
          `}
        >
          Designed by Qurle
        </Text>
      </View>
    </HeaderLogo>
  </StyledHeader>
);
