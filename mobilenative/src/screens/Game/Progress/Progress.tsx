import React, { useContext, useEffect } from "react";
import { GameContext, Screen } from "../../../contexts/game.context";
import { View } from "react-native";
import { Colors, ProgressBar, Badge } from "react-native-paper";

const TRACKS_PER_ROUND = 10;

export const Progress: React.FC = () => {
  const { result, setScreen } = useContext(GameContext);

  useEffect(() => {
    if (result.isEnd) setScreen(Screen.RESULT);
  });

  return (
    <View>
      {result.progress?.map((r, index) => (
        <Badge
          visible={true}
          style={{ backgroundColor: r ? Colors.green800 : Colors.red800 }}
          key={index}
        />
      ))}
    </View>
  );
};
