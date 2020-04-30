import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorMsgDirective } from './components/validation-error/validation-error.directive';
import { HttpClientModule } from '@angular/common/http';
import { ValidationErrorMsgComponent } from './components/validation-error/validation-error.component';
import { FormSubmitDirective } from './components/validation-error/form-submit.directive';
import { ValidationLabelDirective } from './components/validation/validation-label.directive';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    ValidationErrorMsgDirective,
    ValidationErrorMsgComponent,
    FormSubmitDirective,
    ValidationLabelDirective,
    LogoComponent
  ],
  imports: [
    CommonModule,    
    HttpClientModule
  ],
  exports: [
    ValidationErrorMsgDirective,
    LogoComponent
  ],
  entryComponents: [
    ValidationErrorMsgComponent,
  ]
})
export class SharedModule { }
