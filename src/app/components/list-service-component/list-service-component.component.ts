import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces-models/animals';
import { ListServiceService } from 'src/app/service/list-service.service';

@Component({
  selector: 'app-list-service-component',
  templateUrl: './list-service-component.component.html',
  styleUrls: ['./list-service-component.component.scss']
})
export class ListServiceComponentComponent implements OnInit {

  constructor(private listService: ListServiceService) { }

  ngOnInit(): void {
  }
 
  //Aqui usaremos a interface(model)
  animalsComInterface: Animal[] = [ 
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 10},
    {name: "Frida", type: "Dog", age: 1},
    {name: "Bob", type: "Horse", age: 2},
  ];


  removeAnimal(animal: Animal) {
    this.animalsComInterface = this.listService.remove(this.animalsComInterface, animal)
    alert("funcionou");
    }

}
