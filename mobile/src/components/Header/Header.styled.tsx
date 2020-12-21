import styled from "@emotion/native";

import { accent, bg, main } from "../../utils";

export const StyledHeader = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 42px;
  margin-bottom: 42px;
`;

export const HeaderLogo = styled.View`
  padding: 24px 80px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  background: ${accent};
  color: ${bg};
  font-weight: 700;
`;
export const HeaderTitle = styled.Text`
  display: none;
  text-align: center;
  color: ${main};
`;

export const HeaderNav = styled.View`
  text-align: right;
  color: ${main};
  & > * + * {
    margin-left: 24px;
  }
`;
