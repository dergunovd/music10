import styled from '@emotion/styled';
import { accent, bg, main } from '../../utils';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`;

export const HeaderLogo = styled.div`
  padding: 24px 70px;
  font-size: 24px;
  background: ${accent};
  color: ${bg};
  font-weight: 700;
`;
export const HeaderTitle = styled.h2`
  color: ${main};
`;

export const HeaderNav = styled.nav`
  color: ${main};
`;
