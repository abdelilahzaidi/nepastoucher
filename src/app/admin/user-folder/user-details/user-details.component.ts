import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent{  errorMessage: any;
constructor(
  private httpClient: HttpClient,
  private fb: FormBuilder,
  private userService: UserService,
  private router: Router
) {}
apiUrl = 'http://localhost:3001';
user: any;
users: any[] = [];

response$: any;

currentAction!: string;
ngOnInit(): void {
  this.httpClient
    .get<any[]>(this.apiUrl + '/auth/user')
    .subscribe((data) => {
      this.user = data;
    });
  
}


//Utilisateur récupéré par id
getUserById(u: any) {
  this.userService.getUserById(u.id).subscribe({
    next: (data) => {
      this.user = data;
      this.router.navigate(['/admin/user-details', u.id]);
    },
    error: (err) => {
      this.errorMessage = err.error;
    },
  });
  console.log('Hello user',u.id);
}





}

