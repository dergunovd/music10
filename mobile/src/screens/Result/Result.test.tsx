import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

import { GameContext, Screen } from "../../contexts";
import { Result } from "./Result";
import { PROGRESS } from "../../mocks";

describe("Result", () => {
  const setScreen = jest.fn();
  const setResult = jest.fn();
  const setGameState = jest.fn();

  it("Should render", async () => {
    const screen = render(
      <GameContext.Provider
        value={{
          screen: Screen.RESULT,
          setScreen,
          result: { progress: PROGRESS, isEnd: true },
          setResult,
          gameState: { isSelectTrack: false, playlistName: "" },
          setGameState,
        }}
      >
        <Result />
      </GameContext.Provider>
    );

    await waitFor(() =>
      expect(screen.getAllByText("Вы угадали 5 из 8 треков")).toBeDefined()
    );
  });

  it("Should game again", async () => {
    const screen = render(
      <GameContext.Provider
        value={{
          screen: Screen.RESULT,
          setScreen,
          result: { progress: PROGRESS, isEnd: true },
          setResult,
          gameState: { isSelectTrack: false, playlistName: "" },
          setGameState,
        }}
      >
        <Result />
      </GameContext.Provider>
    );
    await waitFor(() => {
      fireEvent.press(screen.getByRole("button"));
      expect(setScreen).toHaveBeenCalledTimes(1);
      expect(setScreen).toHaveBeenCalledWith(Screen.PLAYLIST);
    });
  });
});
