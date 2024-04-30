import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavigationMenu } from './components/NavigationComponent';
import { PlayModesList } from './components/PlayComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <PlayModesList />
    <NavigationMenu />
  </>
);
