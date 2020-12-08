import React, { useContext } from "react";
import { GameContext, Screen } from "../../contexts/game.context";
import { View } from "react-native";
import { Paragraph, Title, Button } from "react-native-paper";

export const Result: React.FC = () => {
  const { result, setScreen } = useContext(GameContext);

  return (
    <View>
      <Title>Результаты</Title>
      <Paragraph>
        Вы угадали {result.progress.filter((r) => r).length} из{" "}
        {result.progress.length} треков
      </Paragraph>
      <Button onPress={() => setScreen(Screen.PLAYLIST)}>Играть снова</Button>
    </View>
  );
};
