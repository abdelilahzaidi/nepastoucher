import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  
  user$ : Observable<any>
  constructor(private httpClient : HttpClient, private router: Router, private $session: SessionService){
    this.user$ = $session.User$
  }


ngOnInit(){
  
}

doLogout() {
  localStorage.removeItem('token');
  this.router.navigate(['auth/login']);
  console.log('logout');
}

}




