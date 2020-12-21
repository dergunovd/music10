import styled from "@emotion/native";

import { accent, bg, main } from "../../utils";

export const StyledHeader = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3.5rem;
  margin-bottom: 3.5rem;
`;

export const HeaderLogo = styled.Text`
  padding: 2rem 5rem;
  font-size: 24px;
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
    margin-left: 2rem;
  }
`;
