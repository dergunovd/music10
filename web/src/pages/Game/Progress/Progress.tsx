import React, { useContext, useEffect } from 'react';

import { GameContext, Screen } from '../../../contexts';
import { ProgressBar } from '../../../components';

export const Progress: React.FC = () => {
  const { result, setScreen } = useContext(GameContext);

  useEffect(() => {
    if (result.isEnd) setScreen(Screen.RESULT);
  });

  return <ProgressBar progress={result.progress} />;
};
