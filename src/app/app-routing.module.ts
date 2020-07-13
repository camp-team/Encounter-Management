import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShellComponent } from './shell/shell/shell.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./edit/edit.module').then((m) => m.EditModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'edit',
        loadChildren: () =>
          import('./edit/edit.module').then((m) => m.EditModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'user-detail',
        loadChildren: () =>
          import('./user-detail/user-detail.module').then(
            (m) => m.UserDetailModule
          ),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
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
        path: 'privasypolicy',
        loadChildren: () =>
          import('./privacypolicy/privacypolicy.module').then(
            (m) => m.PrivacypolicyModule
          ),
      },
    ],
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
