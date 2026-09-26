import { Routes } from '@angular/router';

export const routes: Routes = [
{
path: 'dashboard',
loadComponent: () =>
import('./misistema/pages/dashboard/dashboard/dashboard').then(
(m) => m.Dashboard,
),
},
{
path: '**',
redirectTo: 'dashboard',
},
];
