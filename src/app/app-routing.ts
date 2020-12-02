import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-page',
    loadChildren: () => import('./my-page/my-page.module').then(m => m.MyPageModule)
  }
];

export const routing = RouterModule.forRoot(routes);
