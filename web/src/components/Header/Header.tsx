import React, { useCallback, useContext } from 'react';
import {
  HeaderLogo,
  HeaderNav,
  HeaderTitle,
  StyledHeader,
} from './Header.styled';
import { GameContext, Screen, WsContext } from '../../contexts';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
  nav?: Array<React.ReactNodeArray>;
}

export const Header: React.FC<HeaderProps> = ({ text, nav = [], ...props }) => {
  const { setScreen, setResult } = useContext(GameContext);
  const ws = useContext(WsContext);

  const goToStart = useCallback(async () => {
    setResult({ isEnd: false, progress: [] });
    setScreen(Screen.PLAYLIST);
    await ws.reconnect();
  }, []);

  return (
    <StyledHeader {...props}>
      <HeaderLogo onClick={goToStart}>
        Music10 <sup>β</sup>
        <br />
        <sup>Designed by Qurle</sup>
      </HeaderLogo>
      <HeaderTitle>{text}</HeaderTitle>
      <HeaderNav>{nav}</HeaderNav>
    </StyledHeader>
  );
};
