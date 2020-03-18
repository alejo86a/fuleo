import {
  ApplicationRef,
  Directive,
  HostBinding,
  Input,
  ViewContainerRef,
  ElementRef,
  OnInit,
  Injector,
  OnDestroy,
  ComponentFactoryResolver,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { DomPortalHost, Portal, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';

import { ValidationErrorMsgComponent } from './validation-error.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[validationError]'
})
export class ValidationErrorMsgDirective implements OnInit, OnChanges {

  @HostBinding('style.position') position = 'relative';
  @Input() inputErrors: any;
  @Input() errorDefs: any;
  @Input() touched: boolean;

  errorMessage: string;
  isControlTouched = undefined;
  errorsControl = undefined;
  private errorMsgPortalHost: DomPortalHost;
  private templatePortal: TemplatePortal;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly injector: Injector,
    private readonly appRef: ApplicationRef,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    this.createContainerTemplate();
  }

  get errorsMsg() {
    return this.errorMessage;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.hide();
    this.setChange(changes);
    this.verifyErrors(this.errorsControl);
  }

  private setChange(changes: SimpleChanges) {
    if (changes['inputErrors']) { this.errorsControl = changes['inputErrors'].currentValue; }
    if (changes['touched']) { this.isControlTouched = changes['touched'].currentValue; }
  }

  private verifyErrors(errors) {
    if (this.errorsControl && this.touched) {
      Object.keys(this.errorDefs).forEach(key => {
        if (errors[key]) {
          this.errorMessage = this.errorDefs[key];
          this.show();
        }
      });
    }
  }

  private createContainerTemplate() {
    this.errorMsgPortalHost = new DomPortalHost(
      (this.elementRef.nativeElement).parentElement,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
    this.templatePortal = this.CreateTemplatePortal();
  }

  private CreateTemplatePortal() {
    const errorMsgComponent = this.componentFactoryResolver.resolveComponentFactory(ValidationErrorMsgComponent);
    const errorMsgComponentRef = errorMsgComponent.create(this.injector);
    return new TemplatePortal(
      errorMsgComponentRef.instance.errorMsg,
      this.viewContainerRef,
      {
        $implicit: this.errorsMsg,
      }
    );
  }

  private show() {
    if (this.templatePortal && !this.templatePortal.isAttached) {
      this.createContainerTemplate();
      this.errorMsgPortalHost.attach(this.templatePortal);
    }
  }

  private hide() {
    if (this.templatePortal && !this.templatePortal.isAttached) {
      this.errorMsgPortalHost.detach();
    }
  }
}
