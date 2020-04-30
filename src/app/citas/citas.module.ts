import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media/social-media.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SocialMediaComponent, MenuComponent, HomeComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,     
    SharedModule,
  ]
})
export class CitasModule { }
