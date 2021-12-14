import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('../app/front-end/front-page.module').then(m => m.FrontPageModule)},
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', loadChildren: () => import('../app/admin-page/admin-page.module').then(m => m.AdminPageModule), canActivate: [AdminGuard], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
