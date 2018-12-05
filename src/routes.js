import HomePage from './pages/home.f7.html';
import AboutPage from './pages/about.f7.html';
import FormPage from './pages/form.f7.html';
import DynamicRoutePage from './pages/dynamic-route.f7.html';
import NotFoundPage from './pages/not-found.f7.html';

import PanelLeftPage from './pages/panel-left.f7.html';
import PanelRightPage from './pages/panel-right.f7.html';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
