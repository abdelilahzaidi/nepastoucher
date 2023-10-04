import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  errorMessage: any;
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
    this.getUser();
  }

  //Liste tous les utilisateurs
  getUser() {
    return this.httpClient.get(this.apiUrl + '/user').subscribe({
      next: (data) => {
        this.users = data as [];
        console.log('user', this.user);
      },
      error: (err) => {
        console.log(err);
      },
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




  handleEditUser($event: Event, u: any) {
    $event.preventDefault();
    $event.stopPropagation();
    console.log('up',u.id);
    this.router.navigate(['/admin/user-edit', u.id]);
  }

}

