import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  goToHomePage(): void {
    this.router.navigate(['/home']);

    const state = { page: 'home' };
    const title = 'Home';
    const url = `/home?_=${Date.now()}`;
    history.pushState(state, title, url);
  }


}
