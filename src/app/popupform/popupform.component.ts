import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popupform',

  templateUrl: './popupform.component.html',
  styleUrls: ['./popupform.component.css']
})

export class PopupformComponent {

  @Input() showPopup: boolean | undefined;
  @Output() closed = new EventEmitter<boolean>();
  constructor(private router: Router) { }



  closeModal() {
    console.log("Close button clicked");

   // this.showPopup = false;
    this.closed.emit();
    }
  }
