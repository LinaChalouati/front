import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popupmetric',
  templateUrl: './popupmetric.component.html',
  styleUrls: ['./popupmetric.component.css']
})
export class PopupmetricComponent {
  @Output() itemDragged = new EventEmitter<string>();

  items = [  { name: 'Item 1' },  { name: 'Item 2' },  { name: 'Item 3' },  { name: 'Item 4' },  { name: 'Item 5' }];

  onDragStart(event: DragEvent, item: string) {
    event.dataTransfer!.setData('text/plain', item);
    this.itemDragged.emit(item);
  }
  
}
