import { render } from "@testing-library/react-native";
import React from "react";
import { ApiContext, GameContext, Screen, WsContext } from "../../contexts";
import { Api, WS } from "../../utils";
import { Game } from "./Game";

describe("Game", () => {
  const api = new Api();
  const ws = new WS();
  it("Should render", async () => {
    const setScreen = jest.fn();
    const setResult = jest.fn();
    const setGameState = jest.fn();
    const screen = render(
      <ApiContext.Provider value={api}>
        <WsContext.Provider value={ws}>
          <GameContext.Provider
            value={{
              screen: Screen.PLAYLIST,
              setScreen,
              result: { progress: [], isEnd: false },
              setResult,
              gameState: { isSelectTrack: false, playlistName: "" },
              setGameState,
            }}
          >
            <Game />
          </GameContext.Provider>
        </WsContext.Provider>
      </ApiContext.Provider>
    );
  });
});
