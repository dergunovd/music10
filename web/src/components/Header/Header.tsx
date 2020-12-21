import React from 'react';
import {
  HeaderLogo,
  HeaderNav,
  HeaderTitle,
  StyledHeader,
} from './Header.styled';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  nav?: Array<React.ReactNodeArray>;
}

export const Header: React.FC<HeaderProps> = ({ text, nav = [], ...props }) => (
  <StyledHeader {...props}>
    <HeaderLogo>
      Music10 <sup>β</sup>
      <br />
      <sup>Design by Qurle</sup>
    </HeaderLogo>
    <HeaderTitle>{text}</HeaderTitle>
    <HeaderNav>{nav}</HeaderNav>
  </StyledHeader>
);
