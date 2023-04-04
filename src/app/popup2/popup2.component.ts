import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup2',
  templateUrl: './popup2.component.html',
  styleUrls: ['./popup2.component.css']
})
export class Popup2Component {
  constructor(private router: Router) { }


  goServerType() {
    console.log("server button clicked");
  
    this.router.navigate(['/typeserver']);
  }
  
}
