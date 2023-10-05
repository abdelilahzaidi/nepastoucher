import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HoraireService } from 'src/app/services/horaire/horaire.service';

@Component({
  selector: 'app-horaire-list',
  templateUrl: './horaire-list.component.html',
  styleUrls: ['./horaire-list.component.css']
})
export class HoraireListComponent {
  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private horaireService: HoraireService,
    private router: Router
  ) {}
  apiUrl = 'http://localhost:3001';
  user: any;
  horaire: any;
  horaires: any[] = [];

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(this.apiUrl + '/horaire')
      .subscribe((data: any) => {
        this.horaire = data;
      });
    this.gethoraires();
  }



  gethoraires() {
    console.log('horaires');
    this.httpClient
      .get<any[]>('http://localhost:3001/horaire')
      .subscribe({
        next: (data) => {
          this.horaires = data as [];
          console.log('Niveaux', this.horaires);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }

  // gethoraireById(p: any) {
  //   console.log("Un prog")
  //   this.niveauService.gethoraireById(p.id).subscribe({
  //     next: (data) => {
  //       this.horaire = data
  //       console.log("horaire", data)
  //       console.log("horaire id", this.horaire.id, " ", p.id)

  //      },
  //     error: (err) => {
  //       this.errorMessage = err.error;
  //     },
  //   })
  // }

}
