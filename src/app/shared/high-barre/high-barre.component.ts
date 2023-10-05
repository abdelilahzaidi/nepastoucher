import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-high-barre',
  templateUrl: './high-barre.component.html',
  styleUrls: ['./high-barre.component.css'],
  standalone :true,
  imports:[RouterModule, CommonModule]
})
export class HighBarreComponent {
  currentAction : any
  actions =[
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