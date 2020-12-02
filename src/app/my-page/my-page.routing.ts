import { Routes, RouterModule } from '@angular/router';
import { MyPageComponent } from "./my-page.component";

const routes: Routes = [
  {
    path: '',
    component: MyPageComponent
  }
];

export const routing = RouterModule.forChild(routes);
