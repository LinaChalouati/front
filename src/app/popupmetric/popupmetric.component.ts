import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-popupmetric',
  templateUrl: './popupmetric.component.html',
  styleUrls: ['./popupmetric.component.css']
})
export class PopupmetricComponent {



  @Input() isOpen: boolean = false;

  onDragStart(event: any) {
    event.dataTransfer.setData('text/plain', event.target.src);
  }

  close() {
    this.isOpen = false;
  }
}
