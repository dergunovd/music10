import styled from '@emotion/styled';
import { Colors } from '@dergunovd/music10';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3.5rem;
  margin-bottom: 3.5rem;
`;

export const HeaderLogo = styled.div`
  padding: 2rem 5rem;
  font-size: 2rem;
  background: ${Colors.accent};
  color: ${Colors.bg};
  font-weight: 700;
  cursor: pointer;
`;
export const HeaderTitle = styled.h2`
  display: none;
  text-align: center;
  color: ${Colors.main};
`;

export const HeaderNav = styled.nav`
  text-align: right;
  color: ${Colors.main};
  & > * + * {
    margin-left: 2rem;
  }
`;
