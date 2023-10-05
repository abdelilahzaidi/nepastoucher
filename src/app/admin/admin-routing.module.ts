import { UserEditComponent } from './user-folder/user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNewComponent } from './user-folder/user-new/user-new.component';
import { UserComponent } from './user-folder/user/user.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsersComponent } from '../users/users.component';
import { authAdminGuard } from '../guards/auth-admin.guard';
import { userResolver } from './user-folder/user-edit/user.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-folder/user-list/user-list.component';
import { ProgramListComponent } from './program-folder/program-list/program-list.component';
import { UserDetailsComponent } from './user-folder/user-details/user-details.component';
import { UserEditStatusComponent } from './user-folder/user-edit-status/user-edit-status.component';

const routes: Routes = [
  { path: 'admin', canActivateChild: [ authAdminGuard()], children: [
    {path:'dashboard',component:DashboardComponent}, // /admin
    {path:'user-list',component:UserListComponent}, // /admin/user-list
    {path:'user-new',component:UserNewComponent},
    {path:'user',component:UserComponent, canActivate: [AuthGuard]},
    {path:'users',component:UsersComponent, canActivate: [AuthGuard]},
    {path:'user-edit/:id',component:UserEditComponent, resolve: { user: userResolver() }},
    {path:'user-edit-status/:id',component:UserEditStatusComponent, resolve: { user: userResolver() }},
    {path:'program-list',component:ProgramListComponent},
    { path: 'user-details/:id', component: UserDetailsComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
