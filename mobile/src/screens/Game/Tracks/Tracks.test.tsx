import React from "react";
import {
  render,
  act,
  waitFor,
  fireEvent,
  RenderAPI,
} from "@testing-library/react-native";

import { WS } from "../../../utils";
import { PROGRESS, WS_ANSWER_NEXT } from "../../../mocks";
import { GameContext, Screen, WsContext } from "../../../contexts";
import { Tracks } from "./Tracks";
import { Text } from "react-native";

describe("Tracks", () => {
  const ws = new WS();
  const socket = {} as WebSocket;
  const setScreen = jest.fn();
  const setResult = jest.fn();
  const setGameState = jest.fn();
  it("Should render", async () => {
    const screen = render(
      <WsContext.Provider value={ws}>
        <GameContext.Provider
          value={{
            screen: Screen.PLAYLIST,
            setScreen,
            result: { progress: PROGRESS, isEnd: true },
            setResult,
            gameState: { isSelectTrack: false, playlistName: "" },
            setGameState,
          }}
        >
          <Tracks tracks={WS_ANSWER_NEXT.tracks} />
        </GameContext.Provider>
      </WsContext.Provider>
    );
    expect(screen.getAllByRole("button")).toHaveLength(4);
    expect(
      screen.getAllByRole("button")[0].findAllByType(Text)[0].props
    ).toMatchObject({ children: "Вокруг шум" });
    expect(
      screen.getAllByRole("button")[0].findAllByType(Text)[1].props
    ).toMatchObject({
      children: "Каста",
    });
  });

  it("Should select", async () => {
    jest.spyOn(ws, "choose").mockImplementation(
      async () =>
        (({
          ...socket,
          on: jest.fn(),
        } as unknown) as SocketIOClient.Socket)
    );

    const screen = render(
      <WsContext.Provider value={ws}>
        <GameContext.Provider
          value={{
            screen: Screen.PLAYLIST,
            setScreen,
            result: { progress: PROGRESS, isEnd: true },
            setResult,
            gameState: { isSelectTrack: false, playlistName: "" },
            setGameState,
          }}
        >
          <Tracks tracks={WS_ANSWER_NEXT.tracks} />
        </GameContext.Provider>
      </WsContext.Provider>
    );

    expect(screen.getAllByRole("button")).toHaveLength(4);
    await act(async () => {
      await fireEvent.press(screen.getAllByRole("button")[0]);
    });
    expect(ws.choose).toHaveBeenCalledTimes(1);
    expect(ws.choose).toHaveBeenCalledWith(WS_ANSWER_NEXT.tracks[0].id);
  });
});
