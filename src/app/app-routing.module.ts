
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopupformComponent } from './popupform/popupform.component';
import { ProjectsComponent } from './projects/projects.component';
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'popup', component: PopupformComponent },
  { path: 'projects', component: ProjectsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
