import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupformComponent } from './popupform/popupform.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'; // Import these modules
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { Popup2Component } from './popup2/popup2.component';
import { ServertypeComponent } from './servertype/servertype.component';
import { ConfigsystemComponent } from './systemSetConfigu/configsystem.component';
import { RouterModule } from '@angular/router';
import { MetricsinterfaceComponent } from './metricsinterface/metricsinterface.component';
import { MetricsmenuComponent } from './metricsmenu/metricsmenu.component';
import { PopupmetricComponent } from './popupmetric/popupmetric.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GridsterModule } from 'angular-gridster2';
import { DndModule } from 'ngx-drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopupformComponent, LoginComponent, Popup2Component, ServertypeComponent, ConfigsystemComponent, MetricsinterfaceComponent, MetricsmenuComponent, PopupmetricComponent
    
  ],
  imports: [
    BrowserModule,MatDialogModule,
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule,CommonModule,AppRoutingModule,
    DragDropModule,MatDialogModule,GridsterModule,DndModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
