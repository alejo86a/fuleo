import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.sass']
})
export class PantallaPrincipalComponent implements OnInit {
  loadingText = '';

  constructor() {
   }

  ngOnInit() {
  }

}
