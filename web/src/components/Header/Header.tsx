import React, { useCallback, useContext } from 'react';
import { GameContext, GameScreen, WsContext } from '@dergunovd/music10';

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

export const Header: React.FC<HeaderProps> = ({ text, nav = [], ...props }) => {
  const { setScreen, setResult } = useContext(GameContext);
  const ws = useContext(WsContext);

  const goToStart = useCallback(async () => {
    setResult({ isEnd: false, progress: [] });
    setScreen(GameScreen.PLAYLIST);
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
