import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentAction : any
  actions=[
    {route:"/user-list",title:"Utilisateur","icon":"person"},
    {route:"/program-list",title:"Programme","Programme":"person"},
    {route:"/home",title:"Niveau","icon":"person"},
    {route:"/gpt",title:"Horaire","icon":"person"},
    {route:"/home",title:"Lieu","icon":"person"},
    {route:"/gpt",title:"Seance","icon":"person"},
    {route:"/home",title:"Facture","icon":"person"}
  ]
  title = 'than-long-client';
  constructor(
    private router: Router
    ) {}
  handleRoute(action : any){
    this.currentAction=action
    this.router.navigateByUrl(action.route)
  }

}
