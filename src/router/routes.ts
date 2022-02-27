import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/cards',
    component: () => import('layouts/AspireAppLayout.vue'),
    children: [
      { path: '/home', component: () => import('src/pages/Home.vue') },
      { path: '/cards', component: () => import('src/pages/Cards.vue') },
      { path: '/payments', component: () => import('src/pages/Payments.vue') },
      { path: '/credit', component: () => import('src/pages/Credit.vue') },
      { path: '/settings', component: () => import('src/pages/Settings.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
