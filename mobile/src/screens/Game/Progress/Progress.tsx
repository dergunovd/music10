import React, { useContext, useEffect } from "react";
import { GameContext, Screen } from "../../../contexts/game.context";
import { View, ActivityIndicator } from "react-native";

const TRACKS_PER_ROUND = 10;

export const Progress: React.FC = () => {
  const { result, setScreen } = useContext(GameContext);

  useEffect(() => {
    if (result.isEnd) setScreen(Screen.RESULT);
  });

  return (
    <View>
      <View>
        <ActivityIndicator />
      </View>
    </View>
  );
};
