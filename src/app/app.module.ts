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










@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VovinamComponent,
    TeamComponent,
    MemberComponent,
    ResponsableComponent,
    NiveauComponent,
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
