import { Routes } from '@angular/router';

export const routes: Routes =
    [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadComponent: () => import('./views/home-view/home-view.component').then(view => view.HomeViewComponent) }
    ];
