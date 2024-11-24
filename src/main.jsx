import React from 'react';
import ReactDOM from 'react-dom/client'; // ROOT APP COMPONENT

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: true,
      refetchOnReconnect: true,
      retry: false,
      // staleTime: twentyFourHoursInMs,
    },
  },
})

import App from './App'; // SITE SETTINGS CONTEXT

import SettingsProvider from '@/contexts/settingsContext'; // ALL THIRD PARTY LIBRARIES CSS

import 'nprogress/nprogress.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'simplebar-react/dist/simplebar.min.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<React.StrictMode>
    <SettingsProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SettingsProvider>
  </React.StrictMode>);