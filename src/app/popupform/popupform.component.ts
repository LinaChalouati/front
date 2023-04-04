import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-popupform',

  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
})

export class PopupformComponent {

  @Input() showPopup: boolean | undefined;
  @Output() closed = new EventEmitter<boolean>();
  constructor(private router: Router) { }
  Status=false;


  closeModal() {
    console.log("Close button clicked");

    this.closed.emit();
    }
    goToSecondPopup() {
      console.log("Continue button clicked");
    
      this.router.navigate(['/pop2']);
    }
   
    }
  
