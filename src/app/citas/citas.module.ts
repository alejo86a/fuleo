import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaComponent } from './social-media/social-media.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [SocialMediaComponent, MenuComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class CitasModule { }
