import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { SecurityService } from '../shared/services/security.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,    
    SharedModule
  ],
  providers: [
    SecurityService
  ],
  exports: [
    LoginComponent
  ]
})
export class SeguridadModule { }
