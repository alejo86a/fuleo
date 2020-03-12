import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SeguridadModule } from './seguridad/seguridad.module';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PantallaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SeguridadModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
