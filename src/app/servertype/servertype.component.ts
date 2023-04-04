import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servertype',
  templateUrl: './servertype.component.html',
  styleUrls: ['./servertype.component.css']
})
export class ServertypeComponent {

  constructor(private router: Router) { }

  goToMetrics() {
    console.log("Submit button clicked");
  
    this.router.navigate(['/metrics']);
  }
  

  

}
