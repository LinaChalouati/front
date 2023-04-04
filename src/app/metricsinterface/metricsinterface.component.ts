import { Component,ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { PopupmetricComponent } from '../popupmetric/popupmetric.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-metricsinterface',
  templateUrl: './metricsinterface.component.html',
  styleUrls: ['./metricsinterface.component.css']
})
export class MetricsinterfaceComponent {
  @ViewChild(PopupmetricComponent) popup!: PopupmetricComponent;

  status = false;

  

  constructor(private router: Router,public dialog: MatDialog) {   
  }

  goToPopup(){
    this.status = !this.status;
  }

  openPopup() {
    const dialogRef = this.dialog.open(PopupmetricComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}