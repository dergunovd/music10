import React, { useContext } from 'react';
import { GameContext } from '@dergunovd/music10';

import { ProgressBar } from '../../../components';

export const Progress: React.FC = () => {
  const {
    result: { progress },
    gameState: { isSelectTrack },
  } = useContext(GameContext);

  return <ProgressBar progress={progress} isSelectTrack={isSelectTrack} />;
};
