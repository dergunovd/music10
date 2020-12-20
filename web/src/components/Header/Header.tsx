import React from 'react';
import {
  HeaderLogo,
  HeaderNav,
  HeaderTitle,
  StyledHeader,
} from './Header.styled';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  text: React.ReactNode;
  nav?: Array<React.ReactNodeArray>;
}

export const Header: React.FC<HeaderProps> = ({ text, nav = [], ...props }) => (
  <StyledHeader {...props}>
    <HeaderLogo>Music10</HeaderLogo>
    <HeaderTitle>{text}</HeaderTitle>
    <HeaderNav>{nav}</HeaderNav>
  </StyledHeader>
);
