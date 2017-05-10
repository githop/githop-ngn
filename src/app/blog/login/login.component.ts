import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'gth-login',
  template: `    
    <div>
      <input type="email" [(ngModel)]="email">
      
      <input type="password" [(ngModel)]="password">
    </div>
    <div>
      <button (click)="login(email, password)">login</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private af: AngularFire) { }

  ngOnInit() {
  }

  login(email, password) {
    console.log('wtf', email, password);
    this.af.auth.login({email, password});
  }

}
