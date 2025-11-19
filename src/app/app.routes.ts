import { Routes } from '@angular/router';

export const routes: Routes = [
    //Para usar el lazyloading se usa loadComponent
    {path: 'login', loadComponent: () => import('./login/login') }, //Para usar la forma corta de import se necesita que el componente sea exportado por default
    {
        path: 'dashboard', 
        loadComponent: () => import('./dashboard/dashboard'),
        children: [
            {path: 'control-flow', loadComponent: () => import('./dashboard/pages/control-flow/control-flow')},
            {path: 'defer-options', loadComponent: () => import('./dashboard/pages/defer-options/defer-options')},
            {path: 'defer-views', loadComponent: () => import('./dashboard/pages/defer-views/defer-views')},
            {path: 'employee-profile', loadComponent: () => import('./dashboard/pages/employee-profile/employee-profile')},
            {path: 'register', loadComponent: () => import('./dashboard/pages/register/register')},
            {path: 'user/:id', loadComponent: () => import('./dashboard/pages/user/user')},
            {path: 'users', loadComponent: () => import('./dashboard/pages/users/users')},
            {path: '', redirectTo: 'control-flow', pathMatch: 'full'}
        ]
     },
    {path: '', redirectTo:'/dashboard', pathMatch:'full'}
];
