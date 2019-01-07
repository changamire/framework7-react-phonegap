import HomePage from './components/pages/HomePage.jsx';
import RightPanel from './components/pages/RightPanel.jsx';
import NotFoundPage from './components/pages/NotFoundPage.jsx';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-right',
    component: RightPanel,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  }
];