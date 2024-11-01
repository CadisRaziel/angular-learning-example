import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces-models/animals';

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

  //Aqui usaremos a interface(model)
  animalsComInterface: Animal[] = [ 
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 10},
    {name: "Frida", type: "Dog", age: 1},
    {name: "Bob", type: "Horse", age: 2},
  ];
  
  //Aqui usaremos a interface(model)
  animalComInterface: Animal = {
    name: "Nameteste",
    type: "Typetest",
    age: 10
  }

  peooples = [ 
    "Juca", "Pedrin", "Joaozin"
  ];

  carros = {
    tipo: "Caminhonete",
    items: "Carroceria"
  };
  //transformar o objeto carros em um array de pares [chave, valor], para poder ser feita iteração em um ngFor
  carrosArray = Object.entries(this.carros);


  animalDetailsComInterface = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animalInterface: Animal) {
    this.animalDetailsComInterface = `O animal ${animalInterface.name} tem ${animalInterface.age}`;
  }

}
