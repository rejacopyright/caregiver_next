'use client'
import { ReactNode } from 'react'

import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { keepPreviousData, QueryCache, QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { encryptedStorage } from '@utils/encryptedStorage'

interface Props {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      placeholderData: keepPreviousData,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      gcTime: 1000 * 60 * 60 * 6, // 6 hours
      // staleTime: Infinity,
      throwOnError: false,
    },
  },
  queryCache: new QueryCache({
    onError: (err: any) => {
      const errMessage = err?.response?.data?.message?.reason || err?.message

      return errMessage
    },
  }),
})

const persister = createAsyncStoragePersister({
  storage: typeof window !== 'undefined' ? encryptedStorage : null,
})

export function QueryProvider({ children }: Props) {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      {children}
    </PersistQueryClientProvider>
  )
}
