import React from 'react';
import ReactDOM from 'react-dom/client'; // ROOT APP COMPONENT

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
      <App />
    </SettingsProvider>
  </React.StrictMode>);