import { UserEditComponent } from './user-folder/user-edit/user-edit.component';
UserEditComponent
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user-folder/user/user.component';
import { UserNewComponent } from './user-folder/user-new/user-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './container/admin.component';
import { MenuComponent } from './menu/menu.component';
import { ProgramComponent } from './home/program/program.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-folder/user-list/user-list.component';
import { UserDetailsComponent } from './user-folder/user-details/user-details.component';
import { ProgramListComponent } from './program-folder/program-list/program-list.component';




@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    UserNewComponent,
    UserEditComponent,
    AdminComponent,
    MenuComponent,
    ProgramComponent,
    DashboardComponent,
    UserListComponent,
    UserDetailsComponent,
    ProgramListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
