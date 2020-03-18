import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorMsgDirective } from './validation-error/validation-error.directive';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ValidationErrorMsgDirective
  ],
  imports: [
    CommonModule,    
    HttpClientModule
  ],
  exports: [
    ValidationErrorMsgDirective
  ]
})
export class SharedModule { }
