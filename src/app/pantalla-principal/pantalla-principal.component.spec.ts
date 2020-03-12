import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaPrincipalComponent } from './pantalla-principal.component';
import { SharedModule } from '../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from '../shared/testing';

// TODO-TEST: realizar los test correspondientes
xdescribe('PantallaPrincipalComponent', () => {
  let component: PantallaPrincipalComponent;
  let fixture: ComponentFixture<PantallaPrincipalComponent>;

  configureTestSuite();

  beforeAll(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TabsModule.forRoot(),
        RouterTestingModule,
        SharedModule.forRoot()
      ],
      declarations: [
        PantallaPrincipalComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
