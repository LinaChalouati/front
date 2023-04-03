import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupformComponent } from './popupform/popupform.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'; // Import these modules
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,PopupformComponent, LoginComponent
    
  ],
  imports: [
    BrowserModule,MatDialogModule,
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule,CommonModule,AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
