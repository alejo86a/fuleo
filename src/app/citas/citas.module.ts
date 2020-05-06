import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media/social-media.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { TopComponent } from './top/top.component';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';
import { CitaComponent } from './cita/cita.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [SocialMediaComponent, MenuComponent, HomeComponent, TopComponent, ListaCitasComponent, CitaComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,   
    MatCardModule,  
    SharedModule,
  ]
})
export class CitasModule { }
