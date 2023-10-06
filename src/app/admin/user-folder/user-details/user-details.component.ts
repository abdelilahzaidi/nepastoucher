import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  @Input() selectedUser: any;
  apiUrl = 'http://localhost:3001';
  user: any;
  users: any[] = [];

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(
        this.apiUrl + '/user/' + this.route.snapshot.paramMap.get('id')!
      )
      .subscribe((data) => {
        this.user = data;
        console.log('in user-details ', this.user);
      });
  }
  handleUpdateUserActif() {
    this.router.navigate(['admin/user-edit-status', this.user.id]);
  }
}
