import React, { Dispatch, SetStateAction } from 'react';
import { Result } from '../utils/ws';

export enum Screen {
  PLAYLIST,
  GAME,
  RESULT,
}

interface GameContext {
  screen: Screen;
  setScreen: Dispatch<SetStateAction<Screen>>;
  result: Result;
  setResult: Dispatch<SetStateAction<Result>>;
}

export const GameContext = React.createContext<GameContext>({
  screen: Screen.PLAYLIST,
  setScreen: {} as Dispatch<SetStateAction<Screen>>,
  result: {} as Result,
  setResult: {} as Dispatch<SetStateAction<Result>>,
});
