import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
// import { FormGuard } from './guards/form.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'user-detail',
    loadChildren: () =>
      import('./user-detail/user-detail.module').then(
        (m) => m.UserDetailModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    // canDeactivate: [FormGuard],
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomeModule),
    canActivate: [GuestGuard],
    canLoad: [GuestGuard],
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('./terms/terms.module').then((m) => m.TermsModule),
  },
  {
    path: 'law',
    loadChildren: () => import('./law/law.module').then((m) => m.LawModule),
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then((m) => m.EditModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    // canDeactivate: [FormGuard],
  },
  {
    path: 'create',
    loadChildren: () => import('./edit/edit.module').then((m) => m.EditModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    // canDeactivate: [FormGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
