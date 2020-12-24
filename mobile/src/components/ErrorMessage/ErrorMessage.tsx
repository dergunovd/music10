import React from "react";
import styled from "@emotion/native";
import { Colors } from "@dergunovd/music10";

export const ErrorMessage = styled.Text`
  padding: 24px 48px;
  font-size: 12px;
  color: ${Colors.main};
  border: 2px solid ${Colors.danger};
  font-weight: 700;
  position: relative;
  text-align: center;
`;
