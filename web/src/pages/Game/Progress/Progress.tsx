import React, { useContext, useEffect } from 'react';

import { GameContext, Screen } from '../../../contexts';
import { ProgressBar } from '../../../components';

export const Progress: React.FC = () => {
  const { result, screen, setScreen } = useContext(GameContext);

  useEffect(() => {
    if (result.isEnd && screen !== Screen.RESULT) setScreen(Screen.RESULT);
  });

  return <ProgressBar progress={result.progress} />;
};
