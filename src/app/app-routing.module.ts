import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShellComponent } from './shell/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
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
      {
        path: 'user-list',
        loadChildren: () =>
          import('./user-list/user-list.module').then((m) => m.UserListModule),
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
