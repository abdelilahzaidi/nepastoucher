import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NiveauService } from 'src/app/services/niveau/niveau.service';

@Component({
  selector: 'app-niveau-list',
  templateUrl: './niveau-list.component.html',
  styleUrls: ['./niveau-list.component.css']
})
export class NiveauListComponent  {

  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private niveauService: NiveauService,
    private router: Router
  ) {}
  apiUrl = 'http://localhost:3001';
  user: any;
  level: any;
  levels: any[] = [];

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(this.apiUrl + '/level')
      .subscribe((data) => {
        this.level = data;
      });
    this.getlevels();
  }



  getlevels() {
    console.log('levels');
    this.httpClient
      .get<any[]>('http://localhost:3001/level')
      .subscribe({
        next: (data) => {
          this.levels = data as [];
          console.log('Niveaux', this.levels);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

    createNiveau() {
      this.router.navigate(['/admin/niveau-new']);
    }

    updateNiveau() {
      this.router.navigate(['/admin/niveau-edit']);
    }

  // getlevelById(p: any) {
  //   console.log("Un prog")
  //   this.niveauService.getlevelById(p.id).subscribe({
  //     next: (data) => {
  //       this.level = data
  //       console.log("level", data)
  //       console.log("level id", this.level.id, " ", p.id)

  //      },
  //     error: (err) => {
  //       this.errorMessage = err.error;
  //     },
  //   })
  // }

}
