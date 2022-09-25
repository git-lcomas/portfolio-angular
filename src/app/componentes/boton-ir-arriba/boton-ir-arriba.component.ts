import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-ir-arriba',
  templateUrl: './boton-ir-arriba.component.html',
  styleUrls: ['./boton-ir-arriba.component.css']
})
export class BotonIrArribaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
