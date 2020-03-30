import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { SecurityService } from '../shared/services/security.service';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,    
    SharedModule,
    // begining angular material components imported
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    // end angular material components imported
  ],
  providers: [
    SecurityService
  ],
  exports: [
    LoginComponent
  ]
})
export class SeguridadModule { }
