import styled from '@emotion/styled';
import { accent, bg, main } from '../../utils';

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
  background: ${accent};
  color: ${bg};
  font-weight: 700;
`;
export const HeaderTitle = styled.h2`
  display: none;
  text-align: center;
  color: ${main};
`;

export const HeaderNav = styled.nav`
  text-align: right;
  color: ${main};
  & > * + * {
    margin-left: 2rem;
  }
`;
