
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopupformComponent } from './popupform/popupform.component';
import {LoginComponent} from "./login/login.component";
import { Popup2Component } from './popup2/popup2.component';
import { ServertypeComponent } from './servertype/servertype.component';
import { ConfigsystemComponent } from './systemSetConfigu/configsystem.component';
import { MetricsinterfaceComponent } from './metricsinterface/metricsinterface.component';
import { MetricsmenuComponent } from './metricsmenu/metricsmenu.component';
import { PopupmetricComponent } from './popupmetric/popupmetric.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'popup', component: PopupformComponent },
  {path :'pop2',component :Popup2Component},
  {path: 'typeserver',component:ServertypeComponent},
  {path : 'configsystem',component:ConfigsystemComponent},
  {path : 'metrics',component:MetricsinterfaceComponent},
  {path : 'metricsmenu',component:MetricsmenuComponent},
  {path: 'popupmetrics',component:PopupmetricComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
