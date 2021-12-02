import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: '', component: PagesListComponent}, 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
    
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
