import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavigationMenu } from './components/NavigationComponents';
import { Play } from './components/PlayComponents';
import { Puzzle } from './components/PuzzleComponents';
import { Learn } from './components/LearnComponents';
import { Watch } from './components/WatchComponents';
import { Menu } from './components/MenuComponents';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <>
    <Play />
    <Puzzle />
    <Learn />
    <Watch />
    <Menu />
    <NavigationMenu />
  </>
);
