import { createBrowserRouter } from 'react-router';
import Main from './components/Main.jsx';
import Cards from './components/cards/Cards.jsx';
import Layout from './Layout.jsx';
import CardById from './components/cards/CardById.jsx';
import { NotFound } from './components/pages/NotFound.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
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
