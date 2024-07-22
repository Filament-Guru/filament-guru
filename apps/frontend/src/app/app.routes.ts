import { Route } from '@angular/router';
import { StartpageComponent } from './pages/startpage/startpage.component';
import { PageNotFoundPage } from './pages/page-not-found/page-not-found.page';

export const appRoutes: Route[] = [
  {
    path: '',
    component: StartpageComponent
  },
  {
    path: 'admin',
    loadChildren: () => import ('@filament-guru/fe-admin').then(m => m.adminRoutes)
  },
  {
    path: 'page-not-found',
    component: PageNotFoundPage,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  }
];
