import React from "react";
import { render } from "@testing-library/react-native";

import { Progress } from "./Progress";
import { GameContext, Screen } from "../../../contexts";
import { PROGRESS } from "../../../mocks";
import { ProgressBarItem, ProgressBarItemVariant } from "../../../components";

describe("Progress", () => {
  const setScreen = jest.fn();
  const setResult = jest.fn();
  const setGameState = jest.fn();

  it("Should render", async () => {
    const screen = render(
      <GameContext.Provider
        value={{
          screen: Screen.PLAYLIST,
          setScreen,
          result: { progress: PROGRESS, isEnd: false },
          setResult,
          gameState: { isSelectTrack: false, playlistName: "" },
          setGameState,
        }}
      >
        <Progress />
      </GameContext.Provider>
    );
    expect(screen.getAllByRole("progressbar")).toHaveLength(10);
    expect(screen.getAllByRole("progressbar")[0].props.variant).toBe(
      ProgressBarItemVariant.Success
    );
    expect(screen.getAllByRole("progressbar")[1].props.variant).toBe(
      ProgressBarItemVariant.Wrong
    );
    expect(screen.getAllByRole("progressbar")[8].props.variant).toBe(
      ProgressBarItemVariant.Current
    );
    expect(screen.getAllByRole("progressbar")[9].props.variant).toBe(
      ProgressBarItemVariant.Default
    );
  });
});
