import React, { useContext } from "react";
import { GameContext, Screen } from "../../contexts/game.context";
import { Text, View, Button } from "react-native";

export const Result: React.FC = () => {
  const { result, setScreen } = useContext(GameContext);

  return (
    <View>
      <Text>Результаты</Text>
      <Text>
        Вы угадали {result.progress.filter((r) => r).length} из{" "}
        {result.progress.length} треков
      </Text>
      <Button title="Играть снова" onPress={() => setScreen(Screen.PLAYLIST)} />
    </View>
  );
};
