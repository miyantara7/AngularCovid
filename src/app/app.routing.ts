import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './user/home/home.component';
import { ListcovidComponent } from './user/listcovid/listcovid.component';

export const AppRoutes: Routes = [
  {
    
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'user',
      component: UserComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'list',
      component: ListcovidComponent
    },
    {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
  
];
