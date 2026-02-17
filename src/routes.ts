import { createBrowserRouter } from 'react-router';
import Main from './components/Main.jsx';
import Cards from './components/cards/Cards.jsx';
import App from './App.jsx';
import CardById from './components/cards/CardById.jsx';
import { NotFound } from './components/pages/NotFound.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: Main,
        children: [
          { index: true, Component: Cards },
          { path: 'watchlist', Component: Cards },
          { path: 'movie/:id', Component: CardById },
        ],
      },
    ],
  },
  {
    path: '/*',
    Component: NotFound,
  },
]);
