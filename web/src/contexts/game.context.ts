import React, { Dispatch, SetStateAction } from 'react';

export enum Screen {
  PLAYLIST,
  GAME,
  RESULT,
}

interface GameContext {
  screen: Screen;
  setScreen: Dispatch<SetStateAction<Screen>>;
}

export const GameContext = React.createContext<GameContext>({
  screen: Screen.PLAYLIST,
  setScreen: {} as Dispatch<SetStateAction<Screen>>,
});
