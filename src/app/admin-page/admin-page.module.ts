import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from './admin-page.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './menus/edit-menu/edit-menu.component';
import { EditPostsComponent } from './posts/edit-posts/edit-posts.component';



@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
     
  ],
  declarations: [
    DashboardComponent,
    AdminPageComponent,
    AppNavbarComponent,
    MenusComponent,
    PostsComponent,
    ConfirmationDialogComponent,
    EditMenuComponent,
    EditPostsComponent,
  ],
})
export class AdminPageModule { }
