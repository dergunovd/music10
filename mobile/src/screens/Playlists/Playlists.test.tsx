import React from "react";
import { act, fireEvent, render } from "@testing-library/react-native";

import { Playlists } from "./Playlists";
import { Api, WS } from "../../utils";
import { ApiContext, GameContext, Screen, WsContext } from "../../contexts";
import { PLAYLISTS } from "../../mocks";
import { QueryClient, QueryClientProvider } from "react-query";
import { View } from "react-native";

describe("Playlists", () => {
  const api = new Api();
  const ws = new WS();
  const queryClient = new QueryClient();

  beforeEach(async () => {
    jest.spyOn(api, "getPlaylists").mockImplementation(async () => PLAYLISTS);
    jest.spyOn(ws, "setPlaylist");
  });

  it("Should render", async () => {
    act(async () => {
      const screen = render(
        <QueryClientProvider client={queryClient}>
          <ApiContext.Provider value={api}>
            <Playlists />
          </ApiContext.Provider>
        </QueryClientProvider>
      );

      expect(api.getPlaylists).toHaveBeenCalled();
      expect(screen.getAllByRole("button")).toHaveLength(17);
      expect(screen.getAllByRole("button")[0]).toContain("Русский рэп");
    });
  });

  it("Should select playlist", async () => {
    const setScreen = jest.fn();
    const setResult = jest.fn();
    const setGameState = jest.fn();
    act(async () => {
      const screen = render(
        <QueryClientProvider client={queryClient}>
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
                <Playlists />
              </GameContext.Provider>
            </WsContext.Provider>
          </ApiContext.Provider>
        </QueryClientProvider>
      );

      await fireEvent.press(screen.getAllByRole("button")[0]);
      expect(setScreen).toHaveBeenCalled();
      expect(setScreen).toBeCalledTimes(1);
      expect(setScreen).toBeCalledWith(Screen.GAME);
      expect(ws.setPlaylist).toBeCalledTimes(1);
      expect(ws.setPlaylist).toBeCalledWith(PLAYLISTS[0].id);
    });
  });
});
