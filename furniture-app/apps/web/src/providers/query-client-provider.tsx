'use client';

import {
  QueryClient,
  QueryClientProvider as QueryClientProviderBase
} from '@tanstack/react-query';

export const QueryClientProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProviderBase client={queryClient}>
      {children}
    </QueryClientProviderBase>
  );
};
