import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentAction : any
  actions=[
    {route:"../user-list",title:"Utilisateur","icon":"person"},
    {route:"../program-list",title:"Programme","Programme":"person"},
    {route:"../niveau-list",title:"Niveau","icon":"person"},
    {route:"../gpt",title:"Horaire","icon":"person"},
    {route:"../home",title:"Lieu","icon":"person"},
    {route:"../gpt",title:"Seance","icon":"person"},
    {route:"../home",title:"Facture","icon":"person"},
    {route:"../home",title:"Message","icon":"person"},    
  ]
  title = 'than-long-client';
  user$: Observable<any>
  constructor(
    private router: Router,
    private $session: SessionService
    ) {
      console.log("BLOP")
      this.user$ = $session.User$
    }

  handleRoute(action : any){
    this.currentAction=action
    this.router.navigateByUrl(action.route)
  }
  doLogout() {
    this.$session.close()
  }

}
