import styled from "@emotion/native";
import { Colors } from "@dergunovd/music10";

export const StyledHeader = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 24px;
  margin-bottom: 24px;
`;

export const HeaderLogo = styled.Pressable`
  padding: 12px 36px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${Colors.accent};
  color: ${Colors.bg};
  font-weight: 700;
`;
