import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {
  size = '30px';
  color = 'blue';

  //Aqui eu ainda tenho que ir no css do component e criar essas classes abaixo
  estilos = [
    'title',
    'small-title'   
  ];

  classeSemArray = 'semArrayNgClass'

  constructor() { }

  ngOnInit(): void {
  }

}
