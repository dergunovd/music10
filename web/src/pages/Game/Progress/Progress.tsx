import React, { useContext } from 'react';

import { GameContext } from '../../../contexts';
import { ProgressBar } from '../../../components';

export const Progress: React.FC = () => {
  const {
    result: { progress },
    gameState: { isSelectTrack },
  } = useContext(GameContext);

  return <ProgressBar progress={progress} isSelectTrack={isSelectTrack} />;
};
