import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgramService } from 'src/app/services/program/program.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent {

  errorMessage: any;
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private programService: ProgramService,
    private router: Router
  ) {}
  apiUrl = 'http://localhost:3001';
  user: any;
  program: any;
  programs: any[] = [];

  response$: any;

  currentAction!: string;
  ngOnInit(): void {
    this.httpClient
      .get<any[]>(this.apiUrl + '/program')
      .subscribe((data) => {
        this.program = data;
      });
    this.getPrograms();
  }

  getPrograms() {
    console.log('Programs');
    this.httpClient
      .get<any[]>('http://localhost:3001/program')
      .subscribe({
        next: (data) => {
          this.programs = data as [];
          console.log('user', this.programs);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }


    getProgramById(p: any) {
      this.programService.getprogramById(p.id).subscribe({
        next: (data) => {
          this.program = data;
          console.log("user ",p.id," données : ",this.program)
          this.router.navigate(['/admin/program-details', p.id]);
        },
        error: (err) => {
          this.errorMessage = err.error;
        },
      });
      console.log('Hello programme',p);
    }






    editProgramById($event:Event,p: any) {
      $event.preventDefault();
      $event.stopPropagation()
      this.programService.getprogramById(p.id).subscribe({
        next: (data) => {
          this.program = data;
          console.log("user ",p.id," données : ",this.program)
          this.router.navigate(['/admin/program-edit', p.id]);
        },
        error: (err) => {
          this.errorMessage = err.error;
        },
      });
      console.log('Hello programme',p);
    }

  // getProgramById(p: any) {
  //   console.log("Un prog")
  //   this.programService.getprogramById(p.id).subscribe({
  //     next: (data) => {
  //       this.program = data
  //       console.log("PROGRAM", data)
  //       console.log("program id", this.program.id, " ", p.id)

  //      },
  //     error: (err) => {
  //       this.errorMessage = err.error;
  //     },
  //   })
  // }

  createProgram(){
    this.router.navigate(['/admin/program-new']);
  }

}
