import { Route } from '@angular/router';
import { AdminStartpagePage } from './pages/startpage/startpage.page';
import { FeAdminShell } from './layout/fe-admin/fe-admin.shell';
import { AdminProducerPage } from './pages/producer/producer.page';
import { AdminColorPage } from './pages/color/color.page';
import { AdminFilamentTypePage } from './pages/filament-type/filament-type.page';
import { AdminColorTypePage } from './pages/color-type/color-type.page';

export const adminRoutes: Route[] = [
  {
    path: '',
    component: FeAdminShell,
    children: [
      {
        path: 'index',
        component: AdminStartpagePage,
      },
      {
        path: 'producer',
        component: AdminProducerPage,
      },
      {
        path: 'color',
        component: AdminColorPage,
      },
      {
        path: 'color-type',
        component: AdminColorTypePage,
      },
      {
        path: 'filament-type',
        component: AdminFilamentTypePage,
      },
    ],
  },
];
