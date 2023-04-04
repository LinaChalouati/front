import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-metricsmenu',
  templateUrl: './metricsmenu.component.html',
  styleUrls: ['./metricsmenu.component.css']
})
export class MetricsmenuComponent {

  constructor(private router: Router) { }
 goToPopup(){
  this.router.navigate(['/popupmetrics']);
 }

}
