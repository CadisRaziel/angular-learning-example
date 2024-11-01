import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-for',
  templateUrl: './lists-for.component.html',
  styleUrls: ['./lists-for.component.scss']
})
export class ListsForComponent implements OnInit {

  animals = [ 
    {name: "Turca", type: "Dog"},
    {name: "Tom", type: "Cat"},
    {name: "Frida", type: "Dog"},
    {name: "Bob", type: "Horse"},
  ];

  peooples = [ 
    "Juca", "Pedrin", "Joaozin"
  ];

  carros = {
    tipo: "Caminhonete",
    items: "Carroceria"
  };
  //transformar o objeto carros em um array de pares [chave, valor], para poder ser feita iteração em um ngFor
  carrosArray = Object.entries(this.carros);

  constructor() { }

  ngOnInit(): void {
  }

}
