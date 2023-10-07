import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersModule } from './users/users.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth/authInterceptorService';
import { AuthGuard } from './guards/auth.guard';
import { AdminModule } from './admin/admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './page-no-conected/home/home.component';
import { PageNoConectedModule } from './page-no-conected/page-no-conected.module';
import { VovinamComponent } from './page-no-conected/vovinam/vovinam.component';
import { TeamComponent } from './team/team.component';
import { MemberComponent } from './member/member.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { NiveauComponent } from './admin/niveau-folder/niveau/niveau.component';
import { UserEditStatusComponent } from './admin/user-folder/user-edit-status/user-edit-status.component';
import { NiveauListComponent } from './admin/niveau-folder/niveau-list/niveau-list.component';
import { HoraireListComponent } from './admin/horaire-folder/horaire-list/horaire-list.component';
import { LieuListComponent } from './admin/lieu-folder/lieu-list/lieu-list.component';
import { SeanceListComponent } from './admin/seance-folder/seance-list/seance-list.component';
import { FactureListComponent } from './admin/facture-folder/facture-list/facture-list.component';
import { MessageListComponent } from './admin/message-folder/message-list/message-list.component';
import { CourListComponent } from './admin/cour-folder/cour-list/cour-list.component';
import { DateCourListComponent } from './admin/date-cour-folder/date-cour-list/date-cour-list.component';
import { ProgramDetailsComponent } from './admin/program-folder/program-details/program-details.component';
import { ProgramNewComponent } from './admin/program-folder/program-new/program-new.component';
import { ProgramEditComponent } from './admin/program-folder/program-edit/program-edit.component';
import { NiveauNewComponent } from './admin/niveau-folder/niveau-new/niveau-new.component';
import { NiveauEditComponent } from './admin/niveau-folder/niveau-edit/niveau-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VovinamComponent,
    TeamComponent,
    MemberComponent,
    ResponsableComponent,
    NiveauComponent,
    UserEditStatusComponent,
    NiveauListComponent,
    HoraireListComponent,
    LieuListComponent,
    SeanceListComponent,
    FactureListComponent,
    MessageListComponent,
    CourListComponent,
    DateCourListComponent,
    ProgramDetailsComponent,
    ProgramNewComponent,
    ProgramEditComponent,
    NiveauNewComponent,
    NiveauEditComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    UsersModule,
    AdminModule,
    PageNoConectedModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
