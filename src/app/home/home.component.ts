import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

showPopup = false;
status = false;
  constructor(private router: Router) { }


addToggle()
{
  this.status = !this.status;
}

  handleClose() {
    console.log("Popup closed");
  }



}
