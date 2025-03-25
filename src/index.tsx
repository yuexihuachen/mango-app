import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from '~/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store} children={<App />} />
);
