import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-metricsinterface',
  templateUrl: './metricsinterface.component.html',
  styleUrls: ['./metricsinterface.component.css']
})
export class MetricsinterfaceComponent implements OnInit {
  
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor() {
    this.options = {
      // add your gridster options here
    };
    this.dashboard= [];
  }

  ngOnInit(): void {
    this.options = {
      itemChangeCallback: this.itemChange.bind(this),
      gridType: 'fit',
      displayGrid: 'onDrag&Resize',
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };
    
    this.dashboard = [
      {cols: 2, rows: 2, x: 0, y: 0},
      {cols: 1, rows: 1, x: 2, y: 0},
      {cols: 1, rows: 1, x: 3, y: 0}
    ];
  }

  itemChange(item: GridsterItem, itemComponent: any): void {
    console.info(`item ${itemComponent} has been changed to ${JSON.stringify(item)}`);
  }
}
