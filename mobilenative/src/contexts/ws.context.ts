import React from 'react';
import { WS } from '../utils/ws';

export const WsContext = React.createContext<WS>({} as WS);
