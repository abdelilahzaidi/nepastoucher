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
import { NiveauListComponent } from './niveau-folder/niveau-list/niveau-list.component';
import { HoraireListComponent } from './horaire-folder/horaire-list/horaire-list.component';
import { LieuListComponent } from './lieu-folder/lieu-list/lieu-list.component';
import { SeanceListComponent } from './seance-folder/seance-list/seance-list.component';
import { MessageListComponent } from './message-folder/message-list/message-list.component';
import { FactureListComponent } from './facture-folder/facture-list/facture-list.component';
import { CourListComponent } from './cour-folder/cour-list/cour-list.component';
import { DateCourListComponent } from './date-cour-folder/date-cour-list/date-cour-list.component';
import { AdminComponent } from './container/admin.component';
import { ProgramDetailsComponent } from './program-folder/program-details/program-details.component';
import { ProgramNewComponent } from './program-folder/program-new/program-new.component';
import { ProgramEditComponent } from './program-folder/program-edit/program-edit.component';
import { NiveauNewComponent } from './niveau-folder/niveau-new/niveau-new.component';
import { NiveauEditComponent } from './niveau-folder/niveau-edit/niveau-edit.component';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivateChild: [ authAdminGuard()], children: [
    // {path:'dashboard',component:DashboardComponent}, // /admin
    {path:'user-list',component:UserListComponent}, // /admin/user-list
    {path:'user-new',component:UserNewComponent},
    {path:'user',component:UserComponent, canActivate: [AuthGuard]},
    { path: 'user-details/:id', component: UserDetailsComponent},
    {path:'users',component:UsersComponent, canActivate: [AuthGuard]},
    {path:'user-edit/:id',component:UserEditComponent, resolve: { user: userResolver() }},
    {path:'user-edit-status/:id',component:UserEditStatusComponent, resolve: { user: userResolver() }},
    {path:'program-list',component:ProgramListComponent},
    {path:'niveau-list',component:NiveauListComponent},
    {path:'horaire-list',component:HoraireListComponent},
    {path:'lieu-list',component:LieuListComponent},
    {path:'seance-list',component:SeanceListComponent},
    {path:'message-list',component:MessageListComponent},
    {path:'facture-list',component:FactureListComponent},
    {path:'cour-list',component:CourListComponent},
    {path:'date-cour-list',component:DateCourListComponent},
    {path:'program-details/:id',component:ProgramDetailsComponent},
    {path:'program-new',component:ProgramNewComponent},
    {path:'program-edit/:id',component:ProgramEditComponent},
    {path:'niveau-new',component:NiveauNewComponent},
    {path:'niveau-edit',component:NiveauEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
