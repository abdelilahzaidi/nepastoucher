import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  user$: Observable<any>
  constructor(
    private $session: SessionService
  ) {
    this.user$ = $session.User$;
  }

}
