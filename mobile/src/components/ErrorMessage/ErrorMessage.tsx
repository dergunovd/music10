import React from "react";
import styled from "@emotion/native";

import { danger, main } from "../../utils";

export const ErrorMessage = styled.Text`
  padding: 24px 48px;
  font-size: 12px;
  color: ${main};
  border: 2px solid ${danger};
  font-weight: 700;
  position: relative;
  text-align: center;
`;
