import React, { Dispatch, SetStateAction } from 'react';
import { Result } from '../utils';

export enum Screen {
  PLAYLIST,
  GAME,
  RESULT,
}

export interface GameState {
  playlistName?: string;
  isSelectTrack?: boolean;
}

interface GameContext {
  screen: Screen;
  setScreen: Dispatch<SetStateAction<Screen>>;
  result: Result;
  setResult: Dispatch<SetStateAction<Result>>;
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
}

export const GameContext = React.createContext<GameContext>({
  screen: Screen.PLAYLIST,
  setScreen: {} as Dispatch<SetStateAction<Screen>>,
  result: {} as Result,
  setResult: {} as Dispatch<SetStateAction<Result>>,
  gameState: {} as GameState,
  setGameState: {} as Dispatch<SetStateAction<GameState>>,
});
