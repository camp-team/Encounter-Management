import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomeModule),
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
  },
  {
    path: 'create',
    loadChildren: () => import('./edit/edit.module').then((m) => m.EditModule),
  },
  {
    path: 'user-list',
    loadChildren: () =>
      import('./user-list/user-list.module').then((m) => m.UserListModule),
  },
  {
    path: 'user-create',
    loadChildren: () =>
      import('./user-create/user-create.module').then(
        (m) => m.UserCreateModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
