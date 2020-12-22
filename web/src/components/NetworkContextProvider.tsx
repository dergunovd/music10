import { ApiContext, WsContext } from '../contexts';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useMemo } from 'react';
import { Api, WS } from '../utils';

interface NetworkContextProviderProps {
  api?: Api;
  ws?: WS;
}

export const NetworkContextProvider: React.FC<NetworkContextProviderProps> = ({
  children,
  api,
  ws,
}) => {
  const apiValue = useMemo(() => api || new Api(), []);
  const wsValue = useMemo(() => ws || new WS(), []);
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <ApiContext.Provider value={apiValue}>
        <WsContext.Provider value={wsValue}>{children}</WsContext.Provider>
      </ApiContext.Provider>
    </QueryClientProvider>
  );
};
